import {_decorator, Component, instantiate, Node, NodePool, Prefab, RichText, Tween, tween, UIOpacity, Vec3} from 'cc';
import EventBus from "db://assets/slotBar/scripts/eventSystem/EventCenter";
import {tipTextEventTypes} from "db://assets/slotBar/scripts/eventSystem/EventTypes";

const {ccclass, property} = _decorator;

@ccclass('TipTextController')
export class T extends Component {
    @property(Prefab)
    tipTextPrefab: Prefab = null!;

    @property(Node)
    tipParent: Node = null!;

    private tipPool = new NodePool();

    private currentTipNode: Node | null = null;
    private fadeTween?: Tween<UIOpacity>; // 增加這個屬性
    private tipTextListener = (payload: { text: string, duration?: number }) => {
        this.onShowTip(payload.text, payload.duration);
    };

    onEnable() {
        EventBus.tipTextEventBus.on(tipTextEventTypes.ShowTipText, this.tipTextListener, this);
    }

    onDisable() {
        EventBus.tipTextEventBus.off(tipTextEventTypes.ShowTipText, this.tipTextListener, this);
    }


    private onShowTip(message: string, duration: number = 2) {
        // 停止並回收現有提示
        if (this.currentTipNode) {
            tween(this.currentTipNode).stop();

            const uiOpacity = this.currentTipNode.getComponent(UIOpacity);
            if (uiOpacity && this.fadeTween) {
                this.fadeTween.stop();
            }

            this.currentTipNode.removeFromParent();
            this.tipPool.put(this.currentTipNode);
            this.currentTipNode = null;
            this.fadeTween = undefined;
        }

        // 取得或實例化節點
        let tipNode: Node;
        if (this.tipPool.size() > 0) {
            tipNode = this.tipPool.get()!;
        } else {
            console.log("生成新的tipTextPrefab");
            tipNode = instantiate(this.tipTextPrefab);
        }

        this.tipParent.addChild(tipNode);

        const richText = tipNode.getComponent(RichText);
        if (richText) richText.string = message;

        this.currentTipNode = tipNode;

        // 確保有 UIOpacity
        let uiOpacity = tipNode.getComponent(UIOpacity);
        if (!uiOpacity) {
            uiOpacity = tipNode.addComponent(UIOpacity);
        }

        tipNode.setPosition(0, 220, 0);
        uiOpacity.opacity = 0;

        tween(tipNode)
            .to(0.3, { position: new Vec3(0, 250, 0) })
            .start();

        this.fadeTween = tween(uiOpacity)
            .to(0.3, { opacity: 255 })
            .delay(duration)
            .to(0.3, { opacity: 0 })
            .call(() => {
                tipNode.removeFromParent();
                this.tipPool.put(tipNode);
                if (this.currentTipNode === tipNode) {
                    this.currentTipNode = null;
                }
                this.fadeTween = undefined;
            })
            .start();
    }

}


