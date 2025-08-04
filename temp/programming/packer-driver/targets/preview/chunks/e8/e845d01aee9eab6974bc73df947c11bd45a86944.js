System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, RichText, slotBarEventBus, soltEventTypes, ReelSlots, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ReelView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfslotBarEventBus(extras) {
    _reporterNs.report("slotBarEventBus", "../eventSystem/EventCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsoltEventTypes(extras) {
    _reporterNs.report("soltEventTypes", "../eventSystem/EventTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolData(extras) {
    _reporterNs.report("SymbolData", "../types/SymbolData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelSlots(extras) {
    _reporterNs.report("ReelSlots", "../views/ReelSlot", _context.meta, extras);
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
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      slotBarEventBus = _unresolved_2.default;
    }, function (_unresolved_3) {
      soltEventTypes = _unresolved_3.soltEventTypes;
    }, function (_unresolved_4) {
      ReelSlots = _unresolved_4.ReelSlot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "977eb0Z6dxLUop/CzQt8VLT", "ReelView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelView", ReelView = (_dec = ccclass('ReelView'), _dec2 = property(_crd && ReelSlots === void 0 ? (_reportPossibleCrUseOfReelSlots({
        error: Error()
      }), ReelSlots) : ReelSlots), _dec3 = property(Button), _dec4 = property(RichText), _dec(_class = (_class2 = class ReelView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "reelViews", _descriptor, this);

          _initializerDefineProperty(this, "startButton", _descriptor2, this);

          _initializerDefineProperty(this, "resultRichText", _descriptor3, this);

          this.spinCompletedCount = 0;
        }

        // 用來記錄完成幾個滾輪
        onEnable() {
          this.startButton.node.on('click', this.onClickSpin, this);
          (_crd && slotBarEventBus === void 0 ? (_reportPossibleCrUseOfslotBarEventBus({
            error: Error()
          }), slotBarEventBus) : slotBarEventBus).on((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).InitReel, this.onInitReel, this);
          (_crd && slotBarEventBus === void 0 ? (_reportPossibleCrUseOfslotBarEventBus({
            error: Error()
          }), slotBarEventBus) : slotBarEventBus).on((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).FetchResult, this.onFetchResult, this);
        }

        onDisable() {
          this.startButton.node.off('click', this.onClickSpin, this);
          (_crd && slotBarEventBus === void 0 ? (_reportPossibleCrUseOfslotBarEventBus({
            error: Error()
          }), slotBarEventBus) : slotBarEventBus).off((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).InitReel, this.onInitReel, this);
          (_crd && slotBarEventBus === void 0 ? (_reportPossibleCrUseOfslotBarEventBus({
            error: Error()
          }), slotBarEventBus) : slotBarEventBus).off((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).FetchResult, this.onFetchResult, this);
        }

        onInitReel(symbolDataList) {
          for (var i = 0; i < this.reelViews.length; i++) {
            this.reelViews[i].initReel(symbolDataList);
          }
        }

        onFetchResult(results) {
          this.startButton.node.active = false; // 重新啟用開始按鈕

          for (var i = 0; i < this.reelViews.length; i++) {
            var reelView = this.reelViews[i].getComponent(_crd && ReelSlots === void 0 ? (_reportPossibleCrUseOfReelSlots({
              error: Error()
            }), ReelSlots) : ReelSlots);

            if (reelView) {
              var spinRounds = 3 + i; // 第一輪轉 3 圈，第二輪轉 4 圈，第三輪轉 5 圈

              console.log("\u6A21\u64EC\u7D50\u679C: " + results[i]);

              var onOneSpinEnd = () => {
                this.spinCompletedCount++;

                if (this.spinCompletedCount === this.reelViews.length) {
                  this.showFinalResult(results);
                  this.startButton.node.active = true; // 重新啟用開始按鈕

                  (_crd && slotBarEventBus === void 0 ? (_reportPossibleCrUseOfslotBarEventBus({
                    error: Error()
                  }), slotBarEventBus) : slotBarEventBus).emit((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
                    error: Error()
                  }), soltEventTypes) : soltEventTypes).AllReelsFinished);
                }
              };

              reelView.spinToSymbol(results[i], spinRounds, 0.5, onOneSpinEnd);
            }
          }
        }

        onClickSpin() {
          this.spinCompletedCount = 0; // 重置完成計數

          this.resultRichText.string = '🎰 旋轉中...';
          (_crd && slotBarEventBus === void 0 ? (_reportPossibleCrUseOfslotBarEventBus({
            error: Error()
          }), slotBarEventBus) : slotBarEventBus).emit((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).SpinStart);
        }

        showFinalResult(results) {
          this.resultRichText.string = "\uD83C\uDF89 \u7D50\u679C\uFF1A" + results.join(' - ');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelViews", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resultRichText", [_dec4], {
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
//# sourceMappingURL=e845d01aee9eab6974bc73df947c11bd45a86944.js.map