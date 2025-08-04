System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ServiceBase, _crd;

  _export("ServiceBase", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c0f3CkR8hJRJyMeXFs/H1K", "ServiceBase", undefined);

      _export("ServiceBase", ServiceBase = class ServiceBase {});

      ServiceBase.token = null;
      ServiceBase.API_BASE = 'https://go-slotbar-jwt.onrender.com';
      ServiceBase.Websocket_BASE = 'wss://go-slotbar-jwt.onrender.com/ws';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d66216f02d741b61a20345c3127d68845932f79e.js.map