System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, EditBox, ApiService, EventBus, loginViewEventTypes, tipTextEventTypes, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, LoginView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfApiService(extras) {
    _reporterNs.report("ApiService", "db://assets/slotBar/scripts/services/ApiService", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventBus(extras) {
    _reporterNs.report("EventBus", "db://assets/slotBar/scripts/eventSystem/EventCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloginViewEventTypes(extras) {
    _reporterNs.report("loginViewEventTypes", "db://assets/slotBar/scripts/eventSystem/EventTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOftipTextEventTypes(extras) {
    _reporterNs.report("tipTextEventTypes", "db://assets/slotBar/scripts/eventSystem/EventTypes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      ApiService = _unresolved_2.ApiService;
    }, function (_unresolved_3) {
      EventBus = _unresolved_3.default;
    }, function (_unresolved_4) {
      loginViewEventTypes = _unresolved_4.loginViewEventTypes;
      tipTextEventTypes = _unresolved_4.tipTextEventTypes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "480bavwNJFAQKtnbnXIhoH1", "LoginView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'EditBox']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginView", LoginView = (_dec = ccclass('LoginView'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = (_class2 = class LoginView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "accountInput", _descriptor, this);

          _initializerDefineProperty(this, "passwordInput", _descriptor2, this);

          _initializerDefineProperty(this, "loginButton", _descriptor3, this);

          _initializerDefineProperty(this, "registerButton", _descriptor4, this);
        }

        onEnable() {
          this.loginButton.node.on('click', this.onLoginButtonClickSpin, this);
          this.registerButton.node.on('click', this.onRegisterButtonClickSpin, this);
        }

        onDisable() {
          this.loginButton.node.off('click', this.onLoginButtonClickSpin, this);
          this.registerButton.node.off('click', this.onRegisterButtonClickSpin, this);
        }

        onLoginButtonClickSpin() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var username = _this.accountInput.string.trim();

            var password = _this.passwordInput.string.trim();

            if (!username || !password) {
              console.warn("請輸入帳號密碼");
              (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
                error: Error()
              }), EventBus) : EventBus).tipTextEventBus.emit((_crd && tipTextEventTypes === void 0 ? (_reportPossibleCrUseOftipTextEventTypes({
                error: Error()
              }), tipTextEventTypes) : tipTextEventTypes).ShowTipText, {
                text: '請輸入帳號密碼'
              });
              return;
            }

            try {
              var result = yield (_crd && ApiService === void 0 ? (_reportPossibleCrUseOfApiService({
                error: Error()
              }), ApiService) : ApiService).login(username, password);
              console.log(result);
              console.log(result.message);

              if (result.success) {
                console.log("✅ 登入成功！");
                (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
                  error: Error()
                }), EventBus) : EventBus).tipTextEventBus.emit((_crd && tipTextEventTypes === void 0 ? (_reportPossibleCrUseOftipTextEventTypes({
                  error: Error()
                }), tipTextEventTypes) : tipTextEventTypes).ShowTipText, {
                  text: '✅ 登入成功！'
                });
                director.loadScene("SlotScene");
              } else {
                console.warn("❌ 登入失敗：", result.message);
                (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
                  error: Error()
                }), EventBus) : EventBus).tipTextEventBus.emit((_crd && tipTextEventTypes === void 0 ? (_reportPossibleCrUseOftipTextEventTypes({
                  error: Error()
                }), tipTextEventTypes) : tipTextEventTypes).ShowTipText, {
                  text: result.message || '❌ 登入失敗，請稍後再試'
                });
              }
            } catch (err) {
              console.error("❌ 登入失敗：", err);
            }
          })();
        }

        onRegisterButtonClickSpin() {
          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).loginViewEventBus.emit((_crd && loginViewEventTypes === void 0 ? (_reportPossibleCrUseOfloginViewEventTypes({
            error: Error()
          }), loginViewEventTypes) : loginViewEventTypes).OpenRegisterView);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "accountInput", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "passwordInput", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loginButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "registerButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be1fcce488dd001fab040cfc56af9f36404ed02b.js.map