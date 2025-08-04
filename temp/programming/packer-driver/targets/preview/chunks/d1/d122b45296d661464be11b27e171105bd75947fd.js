System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, NodePool, Prefab, RichText, tween, UIOpacity, Vec3, EventBus, tipTextEventTypes, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, T;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventBus(extras) {
    _reporterNs.report("EventBus", "db://assets/slotBar/scripts/eventSystem/EventCenter", _context.meta, extras);
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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      RichText = _cc.RichText;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventBus = _unresolved_2.default;
    }, function (_unresolved_3) {
      tipTextEventTypes = _unresolved_3.tipTextEventTypes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d1c4795phO14RWWHskK9zJ", "TipTextController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'NodePool', 'Prefab', 'RichText', 'Tween', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("T", T = (_dec = ccclass('TipTextController'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class T extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tipTextPrefab", _descriptor, this);

          _initializerDefineProperty(this, "tipParent", _descriptor2, this);

          this.tipPool = new NodePool();
          this.currentTipNode = null;
          this.fadeTween = void 0;

          // 增加這個屬性
          this.tipTextListener = payload => {
            this.onShowTip(payload.text, payload.duration);
          };
        }

        onEnable() {
          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).tipTextEventBus.on((_crd && tipTextEventTypes === void 0 ? (_reportPossibleCrUseOftipTextEventTypes({
            error: Error()
          }), tipTextEventTypes) : tipTextEventTypes).ShowTipText, this.tipTextListener, this);
        }

        onDisable() {
          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).tipTextEventBus.off((_crd && tipTextEventTypes === void 0 ? (_reportPossibleCrUseOftipTextEventTypes({
            error: Error()
          }), tipTextEventTypes) : tipTextEventTypes).ShowTipText, this.tipTextListener, this);
        }

        onShowTip(message, duration) {
          if (duration === void 0) {
            duration = 2;
          }

          // 停止並回收現有提示
          if (this.currentTipNode) {
            tween(this.currentTipNode).stop();

            var _uiOpacity = this.currentTipNode.getComponent(UIOpacity);

            if (_uiOpacity && this.fadeTween) {
              this.fadeTween.stop();
            }

            this.currentTipNode.removeFromParent();
            this.tipPool.put(this.currentTipNode);
            this.currentTipNode = null;
            this.fadeTween = undefined;
          } // 取得或實例化節點


          var tipNode;

          if (this.tipPool.size() > 0) {
            tipNode = this.tipPool.get();
          } else {
            console.log("生成新的tipTextPrefab");
            tipNode = instantiate(this.tipTextPrefab);
          }

          this.tipParent.addChild(tipNode);
          var richText = tipNode.getComponent(RichText);
          if (richText) richText.string = message;
          this.currentTipNode = tipNode; // 確保有 UIOpacity

          var uiOpacity = tipNode.getComponent(UIOpacity);

          if (!uiOpacity) {
            uiOpacity = tipNode.addComponent(UIOpacity);
          }

          tipNode.setPosition(0, 220, 0);
          uiOpacity.opacity = 0;
          tween(tipNode).to(0.3, {
            position: new Vec3(0, 250, 0)
          }).start();
          this.fadeTween = tween(uiOpacity).to(0.3, {
            opacity: 255
          }).delay(duration).to(0.3, {
            opacity: 0
          }).call(() => {
            tipNode.removeFromParent();
            this.tipPool.put(tipNode);

            if (this.currentTipNode === tipNode) {
              this.currentTipNode = null;
            }

            this.fadeTween = undefined;
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipTextPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tipParent", [_dec3], {
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
//# sourceMappingURL=d122b45296d661464be11b27e171105bd75947fd.js.map