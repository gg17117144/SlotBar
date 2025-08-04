System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, SpriteFrame, Texture2D, EventBus, soltEventTypes, MockData, WebSocketService, _dec, _class, _crd, ccclass, property, SlotController;

  function _reportPossibleCrUseOfEventBus(extras) {
    _reporterNs.report("EventBus", "../eventSystem/EventCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsoltEventTypes(extras) {
    _reporterNs.report("soltEventTypes", "../eventSystem/EventTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMockData(extras) {
    _reporterNs.report("MockData", "../mockData/MockData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolData(extras) {
    _reporterNs.report("SymbolData", "../types/SymbolData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketService(extras) {
    _reporterNs.report("WebSocketService", "db://assets/slotBar/scripts/services/WebSocketService", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      EventBus = _unresolved_2.default;
    }, function (_unresolved_3) {
      soltEventTypes = _unresolved_3.soltEventTypes;
    }, function (_unresolved_4) {
      MockData = _unresolved_4.MockData;
    }, function (_unresolved_5) {
      WebSocketService = _unresolved_5.WebSocketService;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a0ba21XptMbr6LbtDOcoZy", "SlotController", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'ImageAsset', 'SpriteFrame', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SlotController", SlotController = (_dec = ccclass('SlotController'), _dec(_class = class SlotController extends Component {
        constructor(...args) {
          super(...args);
          this.symbolDataList = [];
          this.spinCompletedCount = 0;
        }

        // 用來記錄完成幾個滾輪
        onEnable() {
          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).slotBarEventBus.on((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).SpinStart, this.onSpinStart, this); // 註冊事件-開始旋轉

          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).slotBarEventBus.on((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).AllReelsFinished, this.onAllReelsFinished, this); // 註冊事件-所有滾輪完成
        }

        onDisable() {
          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).slotBarEventBus.off((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).SpinStart, this.onSpinStart, this); // 取消註冊事件-開始旋轉

          (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
            error: Error()
          }), EventBus) : EventBus).slotBarEventBus.off((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
            error: Error()
          }), soltEventTypes) : soltEventTypes).AllReelsFinished, this.onAllReelsFinished, this); // 取消註冊事件-所有滾輪完成
        }

        async start() {
          try {
            let data; // 使用mock資料

            data = (_crd && MockData === void 0 ? (_reportPossibleCrUseOfMockData({
              error: Error()
            }), MockData) : MockData).getMockSymbolData(); // 向伺服器打api拿SymbolData
            // data = await ApiService.fetchSymbolData();

            this.symbolDataList = data;
            await this.preloadAllSymbols(this.symbolDataList);
            await this.connectWebSocket();
            (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
              error: Error()
            }), EventBus) : EventBus).slotBarEventBus.emit((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
              error: Error()
            }), soltEventTypes) : soltEventTypes).InitReel, data); // 發送事件，通知SymbolData已經載入完成
          } catch (error) {
            console.error('讀取載入圖片失敗或token有問題:', error);
          }
        }

        async connectWebSocket() {
          (_crd && WebSocketService === void 0 ? (_reportPossibleCrUseOfWebSocketService({
            error: Error()
          }), WebSocketService) : WebSocketService).connectWebSocket(async msg => {
            console.log("📩 收到後端訊息：", msg); // 假設收到的是 spin 結果

            if (msg.event === "SpinResult") {
              // 呼叫對應方法處理
              // const results: string[] = (msg.data.result as any[]).map(item => String(item));
              (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
                error: Error()
              }), EventBus) : EventBus).slotBarEventBus.emit((_crd && soltEventTypes === void 0 ? (_reportPossibleCrUseOfsoltEventTypes({
                error: Error()
              }), soltEventTypes) : soltEventTypes).FetchResult, msg.data); // EventBus.slotBarEventBus.emit(soltEventTypes.UpdateCoinText, msg.data.balance);
            }
          });
        }

        async onSpinStart() {
          (_crd && WebSocketService === void 0 ? (_reportPossibleCrUseOfWebSocketService({
            error: Error()
          }), WebSocketService) : WebSocketService).spinStart(10);
        }

        async onAllReelsFinished() {// 將資料存進後端
        } // 預載入所有符號圖片 (這裡還可以拆出去modle做操作)


        preloadAllSymbols(symbols) {
          let loadedCount = 0;
          return new Promise((resolve, reject) => {
            symbols.forEach(symbol => {
              assetManager.loadRemote(symbol.imageUrl, (err, imageAsset) => {
                if (err) {
                  reject(err);
                  return;
                }

                const texture = new Texture2D();
                texture.image = imageAsset;
                const spriteFrame = new SpriteFrame();
                spriteFrame.texture = texture;
                symbol.spriteFrame = spriteFrame;
                loadedCount++;

                if (loadedCount === symbols.length) {
                  resolve();
                }
              });
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee664d8377e4ed84a869575d8bb40f296dde8317.js.map