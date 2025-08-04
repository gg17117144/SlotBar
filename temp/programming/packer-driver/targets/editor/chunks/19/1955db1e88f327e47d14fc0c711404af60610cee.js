System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServiceBase, EventBus, tipTextEventTypes, WebSocketService, _crd;

  function _reportPossibleCrUseOfServiceBase(extras) {
    _reporterNs.report("ServiceBase", "db://assets/slotBar/scripts/services/ServiceBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventBus(extras) {
    _reporterNs.report("EventBus", "db://assets/slotBar/scripts/eventSystem/EventCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOftipTextEventTypes(extras) {
    _reporterNs.report("tipTextEventTypes", "db://assets/slotBar/scripts/eventSystem/EventTypes", _context.meta, extras);
  }

  _export("WebSocketService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ServiceBase = _unresolved_2.ServiceBase;
    }, function (_unresolved_3) {
      EventBus = _unresolved_3.default;
    }, function (_unresolved_4) {
      tipTextEventTypes = _unresolved_4.tipTextEventTypes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d657e2kHdHEJsGHkXZuZj+", "WebSocketService", undefined);

      _export("WebSocketService", WebSocketService = class WebSocketService {
        // 建立 WebSocket 連線
        static connectWebSocket(onMessage) {
          this.socket = new WebSocket(`${(_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
            error: Error()
          }), ServiceBase) : ServiceBase).Websocket_BASE}?token=${(_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
            error: Error()
          }), ServiceBase) : ServiceBase).token}`);

          this.socket.onopen = () => {
            (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
              error: Error()
            }), EventBus) : EventBus).tipTextEventBus.emit((_crd && tipTextEventTypes === void 0 ? (_reportPossibleCrUseOftipTextEventTypes({
              error: Error()
            }), tipTextEventTypes) : tipTextEventTypes).ShowTipText, {
              text: "✅ WebSocket 已連線"
            });
            console.log("✅ WebSocket 已連線");
          };

          this.socket.onmessage = event => {
            const msg = JSON.parse(event.data);
            onMessage(msg); // 交給外部處理
          };

          this.socket.onerror = e => {
            (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
              error: Error()
            }), EventBus) : EventBus).tipTextEventBus.emit((_crd && tipTextEventTypes === void 0 ? (_reportPossibleCrUseOftipTextEventTypes({
              error: Error()
            }), tipTextEventTypes) : tipTextEventTypes).ShowTipText, {
              text: "WebSocket 錯誤"
            });
            console.error("WebSocket 錯誤", e);
          };

          this.socket.onclose = () => {
            (_crd && EventBus === void 0 ? (_reportPossibleCrUseOfEventBus({
              error: Error()
            }), EventBus) : EventBus).tipTextEventBus.emit((_crd && tipTextEventTypes === void 0 ? (_reportPossibleCrUseOftipTextEventTypes({
              error: Error()
            }), tipTextEventTypes) : tipTextEventTypes).ShowTipText, {
              text: "WebSocket 已關閉"
            });
            console.log("WebSocket 已關閉");
          };
        } // 發送 SpinStart 資料


        static spinStart(bet) {
          if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            throw new Error("WebSocket 尚未連線");
          }

          const payload = {
            event: "SpinStart",
            data: {
              bet
            }
          };
          this.socket.send(JSON.stringify(payload));
        }

      });

      WebSocketService.socket = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1955db1e88f327e47d14fc0c711404af60610cee.js.map