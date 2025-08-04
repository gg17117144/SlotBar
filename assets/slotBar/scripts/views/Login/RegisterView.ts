import {_decorator, Button, Component, EditBox, Node} from 'cc';
import {ApiService} from "db://assets/slotBar/scripts/services/ApiService";
import EventBus from "db://assets/slotBar/scripts/eventSystem/EventCenter";
import {loginViewEventTypes, tipTextEventTypes} from "db://assets/slotBar/scripts/eventSystem/EventTypes";

const {ccclass, property} = _decorator;

@ccclass('RegisterView')
export class RegisterView extends Component {

    @property(EditBox)
    accountInput: EditBox = null;

    @property(EditBox)
    passwordInput: EditBox = null;

    @property(EditBox)
    emailInput: EditBox = null;

    @property(Button)
    backLoginButton: Button = null;

    @property(Button)
    registerButton: Button = null;

    onEnable() {
        this.backLoginButton.node.on('click', this.onLoginButtonClickSpin, this);
        this.registerButton.node.on('click', this.onRegisterButtonClickSpin, this);
    }

    onDisable() {
        this.backLoginButton.node.off('click', this.onLoginButtonClickSpin, this);
        this.registerButton.node.off('click', this.onRegisterButtonClickSpin, this);
    }

    onLoginButtonClickSpin() {
        EventBus.loginViewEventBus.emit(loginViewEventTypes.OpenLoginView);
    }

    async onRegisterButtonClickSpin() {
        const username = this.accountInput.string.trim();
        const password = this.passwordInput.string.trim();
        const email = this.emailInput.string.trim();

        if (!username || !password) {
            console.log("請輸入帳號或密碼");
            EventBus.tipTextEventBus.emit(tipTextEventTypes.ShowTipText, {text: '請輸入帳號或密碼'});
            return;
        }

        if (!email) {
            EventBus.tipTextEventBus.emit(tipTextEventTypes.ShowTipText, {text: '請輸入電子信箱'});
            console.warn("請輸入電子信箱");
            return;
        }

        try {
            const result = await ApiService.register(username, password, email);

            if (result.success) {
                console.log("✅ 註冊成功！");
                EventBus.tipTextEventBus.emit(tipTextEventTypes.ShowTipText, {text: '✅ 註冊成功！請到信箱收取信件'});
                EventBus.loginViewEventBus.emit(loginViewEventTypes.OpenLoginView);
            } else {
                console.warn("❌ 註冊失敗：", result.message);
                EventBus.tipTextEventBus.emit(tipTextEventTypes.ShowTipText, {text: result.message || '❌ 註冊失敗，請稍後再試'});
            }
        } catch (err) {
            console.error("❌ 登入失敗：", err);
            EventBus.tipTextEventBus.emit(tipTextEventTypes.ShowTipText, {text: '❌ 註冊失敗，請稍後再試'});
        }
    }
}


