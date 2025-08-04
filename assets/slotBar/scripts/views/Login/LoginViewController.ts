import { _decorator, Component, Node } from 'cc';
import EventBus from "db://assets/slotBar/scripts/eventSystem/EventCenter";
import {loginViewEventTypes, soltEventTypes} from "db://assets/slotBar/scripts/eventSystem/EventTypes";
const { ccclass, property } = _decorator;

@ccclass('LoginViewController')
export class LoginViewController extends Component {

    @property(Node)
    loginNode : Node = null;

    @property(Node)
    RegisterNode : Node = null;

    onEnable() {
        EventBus.loginViewEventBus.on(loginViewEventTypes.OpenLoginView, this.OpenLoginView, this); // 註冊事件-開始旋轉
        EventBus.loginViewEventBus.on(loginViewEventTypes.OpenRegisterView, this.OpenRegisterView, this); // 註冊事件-所有滾輪完成
    }

    onDisable() {
        EventBus.loginViewEventBus.off(loginViewEventTypes.OpenLoginView, this.OpenLoginView, this); // 取消註冊事件-開始旋轉
        EventBus.loginViewEventBus.off(loginViewEventTypes.OpenRegisterView, this.OpenRegisterView, this); // 取消註冊事件-所有滾輪完成
    }


    OpenLoginView(){
        this.loginNode.active = true;
        this.RegisterNode.active = false;
    }

    OpenRegisterView(){
        this.loginNode.active = false;
        this.RegisterNode.active = true;
    }
}


