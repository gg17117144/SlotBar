import {_decorator, Button, Component, director, EditBox} from 'cc';
import {ApiService} from "db://assets/slotBar/scripts/services/ApiService";
import EventBus from "db://assets/slotBar/scripts/eventSystem/EventCenter";
import {
    loginViewEventTypes,
    soltEventTypes,
    tipTextEventTypes
} from "db://assets/slotBar/scripts/eventSystem/EventTypes";

const {ccclass, property} = _decorator;

@ccclass('LoginView')
export class LoginView extends Component {

    @property(EditBox)
    accountInput: EditBox = null;

    @property(EditBox)
    passwordInput: EditBox = null;

    @property(Button)
    loginButton: Button = null;

    @property(Button)
    registerButton: Button = null;

    onEnable() {
        this.loginButton.node.on('click', this.onLoginButtonClickSpin, this);
        this.registerButton.node.on('click', this.onRegisterButtonClickSpin, this);
    }

    onDisable() {
        this.loginButton.node.off('click', this.onLoginButtonClickSpin, this);
        this.registerButton.node.off('click', this.onRegisterButtonClickSpin, this);
    }

    async onLoginButtonClickSpin() {
        const username = this.accountInput.string.trim();
        const password = this.passwordInput.string.trim();

        if (!username || !password) {
            console.warn("請輸入帳號密碼");
            EventBus.tipTextEventBus.emit(tipTextEventTypes.ShowTipText, { text: '請輸入帳號密碼' });
            return;
        }

        try {
            const result = await ApiService.login(username, password);
            console.log(result);
            console.log(result.message);
            if (result.success) {
                console.log("✅ 登入成功！");
                EventBus.tipTextEventBus.emit(tipTextEventTypes.ShowTipText, {text: '✅ 登入成功！'});
                director.loadScene("SlotScene");
            } else {
                console.warn("❌ 登入失敗：", result.message);
                EventBus.tipTextEventBus.emit(tipTextEventTypes.ShowTipText, {text: result.message || '❌ 登入失敗，請稍後再試'});
            }
        } catch (err) {
            console.error("❌ 登入失敗：", err);
        }
    }

    onRegisterButtonClickSpin() {
        EventBus.loginViewEventBus.emit(loginViewEventTypes.OpenRegisterView)
    }
}


