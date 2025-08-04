System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, _crd, slotBarEventBus, loginViewEventBus, tipTextEventBus;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43706PYRXxCro3LZLeY35P5", "EventCenter", undefined);

      // 拉霸的事件
      __checkObsolete__(['EventTarget']);

      slotBarEventBus = new EventTarget(); // 登入介面的事件

      loginViewEventBus = new EventTarget(); // 登入介面的事件

      tipTextEventBus = new EventTarget();

      _export("default", {
        slotBarEventBus,
        loginViewEventBus,
        tipTextEventBus
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=06875235f72acd88a09504d2e474027dcbbf873d.js.map