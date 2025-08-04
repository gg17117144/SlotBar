System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServiceBase, ApiService, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfServiceBase(extras) {
    _reporterNs.report("ServiceBase", "db://assets/slotBar/scripts/services/ServiceBase", _context.meta, extras);
  }

  _export("ApiService", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ServiceBase = _unresolved_2.ServiceBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "180f0J1H4FAfJCvhBdvd8nu", "ApiService", undefined); // assets/scripts/services/ApiService.ts


      _export("ApiService", ApiService = class ApiService {
        // 註冊
        static register(username, password, email) {
          return _asyncToGenerator(function* () {
            try {
              var response = yield fetch((_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
                error: Error()
              }), ServiceBase) : ServiceBase).API_BASE + "/register", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username,
                  password,
                  email
                })
              });

              if (!response.ok) {
                var errorData = yield response.json().catch(() => null); // 解析失敗也不會爆

                var message = (errorData == null ? void 0 : errorData.message) || "\u8A3B\u518A\u5931\u6557\uFF1A" + response.status;
                return {
                  success: false,
                  message
                };
              }

              return {
                success: true
              };
            } catch (error) {
              return {
                success: false,
                message: error.message || '網路錯誤，請稍後再試'
              };
            }
          })();
        } // 登入並儲存 token


        static login(username, password) {
          return _asyncToGenerator(function* () {
            try {
              var response = yield fetch((_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
                error: Error()
              }), ServiceBase) : ServiceBase).API_BASE + "/login", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username,
                  password
                })
              });

              if (!response.ok) {
                var errorData = yield response.json().catch(() => null); // 解析失敗也不會爆

                var message = (errorData == null ? void 0 : errorData.message) || "\u767B\u5165\u5931\u6557\uFF1A" + response.status;
                return {
                  success: false,
                  message
                };
              }

              var json = yield response.json();
              console.log("取得token成功：", json.data.token);
              (_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
                error: Error()
              }), ServiceBase) : ServiceBase).token = json.data.token;
              return {
                success: true
              };
            } catch (error) {
              return {
                success: false,
                message: error.message || '網路錯誤，請稍後再試'
              };
            }
          })();
        } // 拿目前登入的使用者資訊


        static getMe() {
          return _asyncToGenerator(function* () {
            if (!(_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
              error: Error()
            }), ServiceBase) : ServiceBase).token) throw new Error("尚未登入");
            var response = yield fetch((_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
              error: Error()
            }), ServiceBase) : ServiceBase).API_BASE + "/me", {
              headers: {
                'Authorization': "Bearer " + (_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
                  error: Error()
                }), ServiceBase) : ServiceBase).token
              }
            });

            if (!response.ok) {
              throw new Error("\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u8A0A\u5931\u6557\uFF1A" + response.status);
            }

            return yield response.json();
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8c7eaca0a7758dbca948a1b0d1531e06565189d.js.map