import {_decorator, assetManager, Component, ImageAsset, SpriteFrame, Texture2D} from 'cc';
import EventBus from '../eventSystem/EventCenter';
import {soltEventTypes} from '../eventSystem/EventTypes';
import {MockData} from '../mockData/MockData';
import {SymbolData} from '../types/SymbolData';
import {WebSocketService} from "db://assets/slotBar/scripts/services/WebSocketService";

const {ccclass, property} = _decorator;

@ccclass('SlotController')
export class SlotController extends Component {
    private symbolDataList: SymbolData[] = [];

    private spinCompletedCount = 0; // 用來記錄完成幾個滾輪

    onEnable() {
        EventBus.slotBarEventBus.on(soltEventTypes.SpinStart, this.onSpinStart, this); // 註冊事件-開始旋轉
        EventBus.slotBarEventBus.on(soltEventTypes.AllReelsFinished, this.onAllReelsFinished, this); // 註冊事件-所有滾輪完成
    }

    onDisable() {
        EventBus.slotBarEventBus.off(soltEventTypes.SpinStart, this.onSpinStart, this); // 取消註冊事件-開始旋轉
        EventBus.slotBarEventBus.off(soltEventTypes.AllReelsFinished, this.onAllReelsFinished, this); // 取消註冊事件-所有滾輪完成
    }

    async start() {
        try {
            let data: SymbolData[];
            // 使用mock資料
            data = MockData.getMockSymbolData();
            // 向伺服器打api拿SymbolData
            // data = await ApiService.fetchSymbolData();

            this.symbolDataList = data;
            await this.preloadAllSymbols(this.symbolDataList);

            await this.connectWebSocket();

            EventBus.slotBarEventBus.emit(soltEventTypes.InitReel, data); // 發送事件，通知SymbolData已經載入完成
        } catch (error) {
            console.error('讀取載入圖片失敗或token有問題:', error);
        }
    }

    private async connectWebSocket() {
        WebSocketService.connectWebSocket(async (msg: any) => {
            console.log("📩 收到後端訊息：", msg);

            // 假設收到的是 spin 結果
            if (msg.event === "SpinResult") {
                // 呼叫對應方法處理
                // const results: string[] = (msg.data.result as any[]).map(item => String(item));
                EventBus.slotBarEventBus.emit(soltEventTypes.FetchResult, msg.data);
                // EventBus.slotBarEventBus.emit(soltEventTypes.UpdateCoinText, msg.data.balance);
            }
        });
    }

    private async onSpinStart() {
        WebSocketService.spinStart(10);
    }

    private async onAllReelsFinished() {
        // 將資料存進後端
    }

    // 預載入所有符號圖片 (這裡還可以拆出去modle做操作)
    preloadAllSymbols(symbols: SymbolData[]): Promise<void> {
        let loadedCount = 0;
        return new Promise((resolve, reject) => {
            symbols.forEach((symbol) => {
                assetManager.loadRemote(symbol.imageUrl, (err, imageAsset: ImageAsset) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    const texture = new Texture2D();
                    texture.image = imageAsset;

                    const spriteFrame = new SpriteFrame();
                    spriteFrame.texture = texture;

                    symbol.spriteFrame = spriteFrame;

                    loadedCount++;
                    if (loadedCount === symbols.length) {
                        resolve();
                    }
                });
            });
        });
    }
}