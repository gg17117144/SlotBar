import { _decorator, assetManager, Button, Component, ImageAsset, RichText, SpriteFrame, Texture2D } from 'cc';
import { MockData } from '../mockData/MockData';
import { SymbolData } from '../types/SymbolData';
import { ReelView } from '../views/ReelView';

const { ccclass, property } = _decorator;

@ccclass('SlotController')
export class SlotController extends Component {

    @property(ReelView)
    reelViews: ReelView[] = [];

    @property(Button)
    startButton: Button = null;

    @property(RichText)
    resultRichText: RichText = null;
    
    private symbolDataList: SymbolData[] = [];

    private spinCompletedCount = 0; // 用來記錄完成幾個滾輪

    async start() {
        this.startButton.node.on('click', this.onClickSpin, this);
        try {
            let data: SymbolData[];
            // 使用mock資料
            data = MockData.getMockSymbolData();
            // 向伺服器打api拿SymbolData
            // data = await ApiService.fetchSymbolData();

            this.symbolDataList = data;
            await this.preloadAllSymbols(this.symbolDataList);
            for (let i = 0; i < this.reelViews.length; i++) {
                this.reelViews[i].initReel(this.symbolDataList);
            }
        } catch (error) {
            console.error('讀取或載入圖片失敗:', error);
        }
    }

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


    onClickSpin() {
        this.resultRichText.string = '🎲 滾動中...';
        this.spinCompletedCount = 0;
        const results = MockData.getMockSlotBar();
        for (let i = 0; i < this.reelViews.length; i++) {
            const reelView = this.reelViews[i].getComponent(ReelView);
            if (reelView) {
                const spinRounds = 3 + i; // 第一輪轉 3 圈，第二輪轉 4 圈，第三輪轉 5 圈
                console.log(`模擬結果: ${results[i]}`);
                const onOneSpinEnd = () => {
                    this.spinCompletedCount++;
                    if (this.spinCompletedCount === this.reelViews.length) {
                        this.showFinalResult(results);
                    }
                };

                reelView.spinToSymbol(results[i], spinRounds, 0.5, onOneSpinEnd);
            }
        }
    }

    showFinalResult(results: string[]) {
        this.resultRichText.string = `🎉 結果：${results.join(' - ')}`;
    }
}