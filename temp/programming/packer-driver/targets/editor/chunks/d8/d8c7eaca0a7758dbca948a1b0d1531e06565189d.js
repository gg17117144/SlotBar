System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServiceBase, ApiService, _crd;

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
        static async register(username, password, email) {
          try {
            const response = await fetch(`${(_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
              error: Error()
            }), ServiceBase) : ServiceBase).API_BASE}/register`, {
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
              const errorData = await response.json().catch(() => null); // 解析失敗也不會爆

              const message = (errorData == null ? void 0 : errorData.message) || `註冊失敗：${response.status}`;
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
        } // 登入並儲存 token


        static async login(username, password) {
          try {
            const response = await fetch(`${(_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
              error: Error()
            }), ServiceBase) : ServiceBase).API_BASE}/login`, {
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
              const errorData = await response.json().catch(() => null); // 解析失敗也不會爆

              const message = (errorData == null ? void 0 : errorData.message) || `登入失敗：${response.status}`;
              return {
                success: false,
                message
              };
            }

            const json = await response.json();
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
        } // 拿目前登入的使用者資訊


        static async getMe() {
          if (!(_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
            error: Error()
          }), ServiceBase) : ServiceBase).token) throw new Error("尚未登入");
          const response = await fetch(`${(_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
            error: Error()
          }), ServiceBase) : ServiceBase).API_BASE}/me`, {
            headers: {
              'Authorization': `Bearer ${(_crd && ServiceBase === void 0 ? (_reportPossibleCrUseOfServiceBase({
                error: Error()
              }), ServiceBase) : ServiceBase).token}`
            }
          });

          if (!response.ok) {
            throw new Error(`取得使用者資訊失敗：${response.status}`);
          }

          return await response.json();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8c7eaca0a7758dbca948a1b0d1531e06565189d.js.map