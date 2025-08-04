System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, MockData;

  function _reportPossibleCrUseOfSymbolData(extras) {
    _reporterNs.report("SymbolData", "../types/SymbolData", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d11d0dy0eFA/a8/4mT4k5cg", "MockData", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MockData", MockData = (_dec = ccclass('getMockSymData'), _dec(_class = class MockData extends Component {
        // mock 資料函式
        static getMockSymbolData() {
          return [{
            type: 'apple',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg'
          }, {
            type: 'banana',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
          }, {
            type: 'cherry',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg'
          }, {
            type: 'grape',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Green_grape_fruit.jpg/640px-Green_grape_fruit.jpg'
          }, {
            type: 'lemon',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Citrus_limon_extracted_1.png/640px-Citrus_limon_extracted_1.png'
          }];
        }

        static getMockSlotBar() {
          const symbolTypes = ['apple', 'banana', 'cherry', 'grape', 'lemon'];
          const results = [];

          for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * symbolTypes.length);
            results.push(symbolTypes[randomIndex]);
          }

          return results;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3269db526ecf2014f37aff504a9b125cd95adcb6.js.map