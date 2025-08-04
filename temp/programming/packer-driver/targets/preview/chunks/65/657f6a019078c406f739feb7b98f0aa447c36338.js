System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, EventBus, loginViewEventTypes, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LoginViewController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventBus(extras) {
    _reporterNs.report("EventBus", "db://assets/slotBar/scripts/eventSystem/EventCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloginViewEventTypes(extras) {
    _reporterNs.report("loginViewEventTypes", "db://assets/slotBar/scripts/eventSystem/EventTypes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      EventBus = _unresolved_2.default;
    }, function (_unresolved_3) {
      loginViewEventTypes = _unresolved_3.loginViewEventTypes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc479kE8eFLX61a/VlAf7ou", "LoginViewController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginViewController", LoginViewController = (_dec = ccclass('LoginViewController'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class LoginViewController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loginNode", _descriptor, this);

          _initializerDefineProperty(this, "RegisterNode", _descriptor2, this);
        }

        onEnable() {
          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).loginViewEventBus.on((_crd && loginViewEventTypes === void 0 ? (_reportPossibleCrUseOfloginViewEventTypes({
            error: Error()
          }), loginViewEventTypes) : loginViewEventTypes).OpenLoginView, this.OpenLoginView, this); // 註冊事件-開始旋轉

          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).loginViewEventBus.on((_crd && loginViewEventTypes === void 0 ? (_reportPossibleCrUseOfloginViewEventTypes({
            error: Error()
          }), loginViewEventTypes) : loginViewEventTypes).OpenRegisterView, this.OpenRegisterView, this); // 註冊事件-所有滾輪完成
        }

        onDisable() {
          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).loginViewEventBus.off((_crd && loginViewEventTypes === void 0 ? (_reportPossibleCrUseOfloginViewEventTypes({
            error: Error()
          }), loginViewEventTypes) : loginViewEventTypes).OpenLoginView, this.OpenLoginView, this); // 取消註冊事件-開始旋轉

          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).loginViewEventBus.off((_crd && loginViewEventTypes === void 0 ? (_reportPossibleCrUseOfloginViewEventTypes({
            error: Error()
          }), loginViewEventTypes) : loginViewEventTypes).OpenRegisterView, this.OpenRegisterView, this); // 取消註冊事件-所有滾輪完成
        }

        OpenLoginView() {
          this.loginNode.active = true;
          this.RegisterNode.active = false;
        }

        OpenRegisterView() {
          this.loginNode.active = false;
          this.RegisterNode.active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loginNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "RegisterNode", [_dec3], {
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
//# sourceMappingURL=657f6a019078c406f739feb7b98f0aa447c36338.js.map