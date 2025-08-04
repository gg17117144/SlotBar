System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, Sprite, tween, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ReelSlot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolData(extras) {
    _reporterNs.report("SymbolData", "../../types/SymbolData", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de368QPlexEBrAqTZdp89rF", "ReelSlot", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Sprite', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelSlot", ReelSlot = (_dec = ccclass('ReelSlot'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Number), _dec(_class = (_class2 = class ReelSlot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "reelItemPrefab", _descriptor, this);

          _initializerDefineProperty(this, "contentNode", _descriptor2, this);

          this.itemHeight = 100;
          this.symbolNodes = [];
          this.symbolDataList = [];
          this.currentOffset = 0;

          // 用來做整體偏移的值，但只會影響 reelItem
          _initializerDefineProperty(this, "currentSymbolIndex", _descriptor3, this);

          this.isSpinning = false;
          this.onSpinEnd = null;
        }

        initReel(symbols) {
          this.symbolDataList = symbols;
          this.currentSymbolIndex = Math.floor(symbols.length / 2);
          this.currentOffset = 0;
          this.contentNode.removeAllChildren();
          this.symbolNodes = [];

          for (let i = 0; i < symbols.length; i++) {
            const item = instantiate(this.reelItemPrefab);
            const sprite = item.getComponentInChildren(Sprite);

            if (sprite && symbols[i].spriteFrame) {
              sprite.spriteFrame = symbols[i].spriteFrame;
            } // 不用設定 y，初始化為0，之後靠 updateVisibleSymbols() 控制位置


            item.setPosition(0, 0);
            this.contentNode.addChild(item);
            this.symbolNodes.push(item);
          } // contentNode 固定位置


          this.contentNode.setPosition(0, 0); // 初始化時，將符號類型順序反轉

          this.symbolNodes.reverse(); // this.symbolDataList.reverse();
          // 更新可見符號位置

          this.updateVisibleSymbols(); // console.log('符號類型順序');
          // for (let index = 0; index < this.symbolDataList.length; index++) {
          //     console.log('符號類型:', this.symbolDataList[index].type);
          // }
          // console.log('現在的符號類型:', this.symbolDataList[this.currentSymbolIndex].type);
        }

        updateVisibleSymbols() {
          const count = this.symbolNodes.length;
          const halfRange = (count - 1) / 2 * this.itemHeight; // 200

          const totalHeight = count * this.itemHeight; // 500

          for (let i = 0; i < count; i++) {
            const item = this.symbolNodes[i]; // 基準位置：中心對齊，從 200 到 -200

            let baseY = halfRange - i * this.itemHeight; // 200,100,0,-100,-200 (依照5張圖片為範例)
            // 讓圖片往下滾動

            let newY = baseY - this.currentOffset; // 位置循環維持在 [-halfRange, halfRange]

            while (newY < -halfRange) {
              newY += totalHeight;
            }

            while (newY > halfRange) {
              newY -= totalHeight;
            }

            item.setPosition(0, newY);
          }
        }

        spinToSymbol(symbolType, spinRounds, duration = 0.5, onComplete) {
          // console.log('當前符號資料:', this.symbolDataList.map(s => s.type));
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
          this.onSpinEnd = onComplete || null; // 計算目標索引與當前索引之間的距離

          const currentIndex = this.currentSymbolIndex; // 計算步數

          let steps = (targetIndex - currentIndex + this.symbolDataList.length) % this.symbolDataList.length;
          if (steps === 0) steps = this.symbolDataList.length; // 計算加上亂數的總步數

          steps = spinRounds * this.symbolDataList.length + steps;
          const endOffset = this.currentOffset + steps * this.itemHeight; // 總時間 = 單次時間 * 步數

          duration = duration * spinRounds; // console.log(`開始滑動到符號: ${symbolType}, 目標索引: ${this.symbolDataList[targetIndex].type}, 當前索引: ${this.symbolDataList[currentIndex].type}, 滾動步數: ${steps}, 結束偏移: ${endOffset}`);

          tween({
            offset: this.currentOffset
          }).to(duration, {
            offset: endOffset
          }, {
            onUpdate: target => {
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
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentSymbolIndex", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=844302e9608b76ce3dc1f60a6de0d762d34abac5.js.map