import {_decorator, Button, Component, RichText} from 'cc';
import {soltEventTypes} from '../../eventSystem/EventTypes';
import {SymbolData} from '../../types/SymbolData';
import {ReelSlot} from "db://assets/slotBar/scripts/views/SlotBar/ReelSlot";
import EventBus from "db://assets/slotBar/scripts/eventSystem/EventCenter";

const {ccclass, property} = _decorator;

@ccclass('ReelView')
export class ReelView extends Component {
    @property(ReelSlot)
    reelViews: ReelSlot[] = [];

    @property(Button)
    startButton: Button = null;

    @property(RichText)
    resultRichText: RichText = null;

    @property(RichText)
    coinRichText: RichText = null;

    private spinCompletedCount = 0; // 用來記錄完成幾個滾輪

    onEnable() {
        this.startButton.node.on('click', this.onClickSpin, this);
        EventBus.slotBarEventBus.on(soltEventTypes.InitReel, this.onInitReel, this);
        EventBus.slotBarEventBus.on(soltEventTypes.FetchResult, this.onFetchResult, this);
        EventBus.slotBarEventBus.on(soltEventTypes.UpdateCoinText, this.updateCoinText, this);
    }

    onDisable() {
        this.startButton.node.off('click', this.onClickSpin, this);
        EventBus.slotBarEventBus.off(soltEventTypes.InitReel, this.onInitReel, this);
        EventBus.slotBarEventBus.off(soltEventTypes.FetchResult, this.onFetchResult, this);
        EventBus.slotBarEventBus.off(soltEventTypes.UpdateCoinText, this.updateCoinText, this);
    }

    private onInitReel(symbolDataList: SymbolData[]) {
        for (let i = 0; i < this.reelViews.length; i++) {
            this.reelViews[i].initReel(symbolDataList);
        }
    }

    private onFetchResult(data: any) {
        this.startButton.node.active = false; // 重新啟用開始按鈕
        for (let i = 0; i < this.reelViews.length; i++) {
            const reelView = this.reelViews[i].getComponent(ReelSlot);
            if (reelView) {
                const spinRounds = 3 + i; // 第一輪轉 3 圈，第二輪轉 4 圈，第三輪轉 5 圈
                const results: string[] = (data.result as any[]).map(item => String(item));
                console.log(`模擬結果: ${results[i]}`);
                const onOneSpinEnd = () => {
                    this.spinCompletedCount++;
                    if (this.spinCompletedCount === this.reelViews.length) {
                        this.showFinalResult(results);
                        this.updateCoinText(data.balance);
                        this.startButton.node.active = true; // 重新啟用開始按鈕
                        EventBus.slotBarEventBus.emit(soltEventTypes.AllReelsFinished);
                    }
                };

                reelView?.spinToSymbol(results[i], spinRounds, 0.5, onOneSpinEnd);
            }
        }
    }

    onClickSpin() {
        this.spinCompletedCount = 0; // 重置完成計數
        this.resultRichText.string = '🎰 旋轉中...';
        EventBus.slotBarEventBus.emit(soltEventTypes.SpinStart);
    }

    showFinalResult(results: string[]) {
        this.resultRichText.string = `🎉 結果：${results.join(' - ')}`;
    }

    updateCoinText(coinNum: any) {
        this.coinRichText.string = `💰 金幣：${coinNum}`;
    }
}


