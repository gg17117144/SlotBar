import { _decorator, Button, Component, RichText } from 'cc';
import slotBarEventBus from '../eventSystem/EventCenter';
import { soltEventTypes } from '../eventSystem/EventTypes';
import { SymbolData } from '../types/SymbolData';
import { ReelSlot as ReelSlots } from '../views/ReelSlot';
const { ccclass, property } = _decorator;

@ccclass('ReelView')
export class ReelView extends Component {

    @property(ReelSlots)
    reelViews: ReelSlots[] = [];

    @property(Button)
    startButton: Button = null;

    @property(RichText)
    resultRichText: RichText = null;

    private spinCompletedCount = 0; // 用來記錄完成幾個滾輪

    onEnable() {
        this.startButton.node.on('click', this.onClickSpin, this);
        slotBarEventBus.on(soltEventTypes.InitReel, this.onInitReel, this);
        slotBarEventBus.on(soltEventTypes.FetchResult, this.onFetchResult, this);
    }

    onDisable() {
        this.startButton.node.off('click', this.onClickSpin, this);
        slotBarEventBus.off(soltEventTypes.InitReel, this.onInitReel, this);
        slotBarEventBus.off(soltEventTypes.FetchResult, this.onFetchResult, this);
    }

    private onInitReel(symbolDataList: SymbolData[]) {
        for (let i = 0; i < this.reelViews.length; i++) {
            this.reelViews[i].initReel(symbolDataList);
        }
    }

    private onFetchResult(results: string[]) {
        this.startButton.node.active = false; // 重新啟用開始按鈕
        for (let i = 0; i < this.reelViews.length; i++) {
            const reelView = this.reelViews[i].getComponent(ReelSlots);
            if (reelView) {
                const spinRounds = 3 + i; // 第一輪轉 3 圈，第二輪轉 4 圈，第三輪轉 5 圈
                console.log(`模擬結果: ${results[i]}`);
                const onOneSpinEnd = () => {
                    this.spinCompletedCount++;
                    if (this.spinCompletedCount === this.reelViews.length) {
                        this.showFinalResult(results);
                        this.startButton.node.active = true; // 重新啟用開始按鈕
                        slotBarEventBus.emit(soltEventTypes.AllReelsFinished);
                    }
                };

                reelView.spinToSymbol(results[i], spinRounds, 0.5, onOneSpinEnd);
            }
        }
    }

    onClickSpin() {
        this.spinCompletedCount = 0; // 重置完成計數
        this.resultRichText.string = '🎰 旋轉中...';
        slotBarEventBus.emit(soltEventTypes.SpinStart);
    }

    showFinalResult(results: string[]) {
        this.resultRichText.string = `🎉 結果：${results.join(' - ')}`;
    }
}


