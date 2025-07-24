import { _decorator, Component, Node, Button, RichText } from 'cc';
import { ReelView } from '../views/ReelView';
const { ccclass, property } = _decorator;

@ccclass('SlotController')
export class SlotController extends Component {
    @property(Node)
    reels: Node[] = [];

    @property(Button)
    startButton: Button = null;

    @property(RichText)
    resultRichText: RichText = null;

    private results: number[] = [1, 3, 2]; // 假資料模擬後端返回

    start() {
        this.startButton.node.on('click', this.onClickSpin, this);
    }

onClickSpin() {
    this.resultRichText.string = '🎲 滾動中...';

    for (let i = 0; i < this.reels.length; i++) {
        const reelView = this.reels[i].getComponent(ReelView);
        if (reelView) {
            const delay = i * 0.3; // 第 i 個滾輪延遲 0.3 秒啟動
            reelView.spinTo(this.results[i], 1.5, delay);
        }
    }

    setTimeout(() => {
        this.resultRichText.string = `🎉 結果：${this.results.join(' - ')}`;
    }, 2000); // 稍微比動畫時間長一點
}

}
