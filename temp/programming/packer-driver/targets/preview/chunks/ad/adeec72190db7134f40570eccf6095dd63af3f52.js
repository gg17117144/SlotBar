System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, soltEventTypes, loginViewEventTypes, tipTextEventTypes;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd193hcWI9DwLqxpQnJ4eZP", "EventTypes", undefined);

      // GameEvent.ts
      _export("soltEventTypes", soltEventTypes = /*#__PURE__*/function (soltEventTypes) {
        soltEventTypes["InitReel"] = "InitReel";
        soltEventTypes["SpinStart"] = "SpinStart";
        soltEventTypes["FetchResult"] = "FetchResult";
        soltEventTypes["AllReelsFinished"] = "AllReelsFinished";
        soltEventTypes["ShowResult"] = "ShowResult";
        soltEventTypes["Jackpot"] = "Jackpot";
        soltEventTypes["UpdateCoinText"] = "updateCoinText";
        return soltEventTypes;
      }({}));

      _export("loginViewEventTypes", loginViewEventTypes = /*#__PURE__*/function (loginViewEventTypes) {
        loginViewEventTypes["OpenLoginView"] = "OpenLoginView";
        loginViewEventTypes["OpenRegisterView"] = "OpenRegisterView";
        return loginViewEventTypes;
      }({}));

      _export("tipTextEventTypes", tipTextEventTypes = /*#__PURE__*/function (tipTextEventTypes) {
        tipTextEventTypes["ShowTipText"] = "ShowTipText";
        return tipTextEventTypes;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=adeec72190db7134f40570eccf6095dd63af3f52.js.map