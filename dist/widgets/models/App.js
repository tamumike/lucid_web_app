define(["require", "exports", "tslib", "./Map", "@dojo/shim/Promise"], function (require, exports, tslib_1, Map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = tslib_1.__importDefault(Map_1);
    var App = (function () {
        function App() {
            this.applicationMap = new Map_1.default();
        }
        return App;
    }());
    exports.default = App;
    ;
});
//# sourceMappingURL=App.js.map