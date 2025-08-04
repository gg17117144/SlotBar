System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ApiService, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSymbolData(extras) {
    _reporterNs.report("SymbolData", "../types/SymbolData", _context.meta, extras);
  }

  _export("ApiService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e0cc0owj9Ec4lfN/ITAExR", "ApiService-001", undefined); // assets/scripts/services/ApiService.ts


      _export("ApiService", ApiService = class ApiService {
        static fetchSymbolData() {
          return _asyncToGenerator(function* () {
            var url = 'https://yourapi.com/api/symbols'; // 改成你的 API 地址或 mock URL

            var response = yield fetch(url);

            if (!response.ok) {
              throw new Error("HTTP error! status: " + response.status);
            }

            var json = yield response.json();
            return json.symbols;
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e40c989832c905678b8da439376870b442f9892a.js.map