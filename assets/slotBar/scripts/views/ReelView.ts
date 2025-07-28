import { _decorator, Component, Node, Prefab, instantiate, Sprite, tween } from 'cc';
import { SymbolData } from '../types/SymbolData';
const { ccclass, property } = _decorator;

@ccclass('ReelView')
export class ReelView extends Component {
    @property(Prefab)
    reelItemPrefab: Prefab = null;

    @property(Node)
    contentNode: Node = null;

    private itemHeight = 100;
    private symbolNodes: Node[] = [];
    private symbolDataList: SymbolData[] = [];

    private currentOffset = 0; // 用來做整體偏移的值，但只會影響 reelItem
    @property(Number)
    private currentSymbolIndex = 0;

    private isSpinning = false;
    private onSpinEnd: Function | null = null;

    initReel(symbols: SymbolData[]) {
        this.symbolDataList = symbols;
        this.currentSymbolIndex = Math.floor(symbols.length / 2)
        this.currentOffset = 0;
        this.contentNode.removeAllChildren();
        this.symbolNodes = [];

        for (let i = 0; i < symbols.length; i++) {
            const item = instantiate(this.reelItemPrefab);
            const sprite = item.getComponentInChildren(Sprite);
            if (sprite && symbols[i].spriteFrame) {
                sprite.spriteFrame = symbols[i].spriteFrame;
            }
            // 不用設定 y，初始化為0，之後靠 updateVisibleSymbols() 控制位置
            item.setPosition(0, 0);
            this.contentNode.addChild(item);
            this.symbolNodes.push(item);
        }

        // contentNode 固定位置
        this.contentNode.setPosition(0, 0);
        // 初始化時，將符號類型順序反轉
        this.symbolNodes.reverse();
        // this.symbolDataList.reverse();
        // 更新可見符號位置
        this.updateVisibleSymbols();
        console.log('符號類型順序');
        for (let index = 0; index < this.symbolDataList.length; index++) {
            console.log('符號類型:', this.symbolDataList[index].type);
        }
        console.log('現在的符號類型:', this.symbolDataList[this.currentSymbolIndex].type);
    }

    private updateVisibleSymbols() {
        const count = this.symbolNodes.length;
        const halfRange = (count - 1) / 2 * this.itemHeight;  // 200

        const totalHeight = count * this.itemHeight; // 500

        for (let i = 0; i < count; i++) {
            const item = this.symbolNodes[i];

            // 基準位置：中心對齊，從 200 到 -200
            let baseY = halfRange - i * this.itemHeight;  // 200,100,0,-100,-200

            // 讓圖片往下滾動
            let newY = baseY - this.currentOffset;

            // 位置循環維持在 [-halfRange, halfRange]
            while (newY < -halfRange) {
                newY += totalHeight;
            }
            while (newY > halfRange) {
                newY -= totalHeight;
            }

            item.setPosition(0, newY);
        }
    }


    spinToSymbol(symbolType: string, spinRounds: number, duration: number = 0.5, onComplete?: Function) {
        console.log('當前符號資料:', this.symbolDataList.map(s => s.type));
        if (this.isSpinning) {
            console.warn("正在轉動中，請稍後");
            return;
        }

        const targetIndex = this.symbolDataList.findIndex(s => s.type === symbolType);
        if (targetIndex === -1) {
            console.warn("找不到指定的符號:", symbolType);
            return;
        }

        this.isSpinning = true;
        this.onSpinEnd = onComplete || null;

        const currentIndex = this.currentSymbolIndex;
        let steps = (targetIndex - currentIndex + this.symbolDataList.length) % this.symbolDataList.length;
        if (steps === 0) steps = this.symbolDataList.length;
        steps = spinRounds * this.symbolDataList.length + steps;
        const endOffset = this.currentOffset + steps * this.itemHeight;
        console.log(`開始滑動到符號: ${symbolType}, 目標索引: ${this.symbolDataList[targetIndex].type}, 當前索引: ${this.symbolDataList[currentIndex].type}, 滾動步數: ${steps}, 結束偏移: ${endOffset}`);
        tween({ offset: this.currentOffset })
            .to(duration, { offset: endOffset }, {
                onUpdate: (target) => {
                    this.currentOffset = target.offset;
                    this.updateVisibleSymbols();
                },
                onComplete: () => {
                    // 迴圈歸正偏移值
                    const totalHeight = this.symbolDataList.length * this.itemHeight;
                    this.currentOffset = this.currentOffset % totalHeight;
                    this.currentSymbolIndex = targetIndex;
                    this.isSpinning = false;
                    if (this.onSpinEnd) this.onSpinEnd();
                    console.log("完成滑動到符號:", symbolType);
                }
            })
            .start();
    }
}
