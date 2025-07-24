import { _decorator, Component, Node, Prefab, instantiate, Label, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ReelView')
export class ReelView extends Component {
    @property(Prefab)
    reelItemPrefab: Prefab = null;

    @property(Node)
    contentNode: Node = null;

    private itemHeight = 100;
    private visibleCount = 3;
    private totalSymbols = 5;

    spinTo(targetSymbol: number, duration = 1.5, delay = 0) {
        const rounds = 3;
        const totalSteps = rounds * this.totalSymbols;

        this.contentNode.removeAllChildren();

        const symbolList: number[] = [];

        // 填滿轉幾圈的圖案
        for (let i = 0; i < totalSteps; i++) {
            symbolList.push(i % this.totalSymbols);
        }

        // 加上最後一個是目標圖案
        symbolList.push(targetSymbol);

        // 加入節點
        for (let i = 0; i < symbolList.length; i++) {
            const item = instantiate(this.reelItemPrefab);
            const label = item.getComponentInChildren(Label);
            if (label) label.string = symbolList[i].toString();
            item.setPosition(0, -i * this.itemHeight);
            this.contentNode.addChild(item);
        }

        // 初始化位置
        this.contentNode.setPosition(new Vec3(0, 0));

        // 計算最終 y 位置
        const totalHeight = symbolList.length * this.itemHeight;
        const targetY = -(totalHeight - this.visibleCount * this.itemHeight);

        tween(this.contentNode)
            .delay(delay)
            .to(duration, { position: new Vec3(0, targetY) }, { easing: 'cubicOut' })
            .start();
    }
}
