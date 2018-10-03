define(["require", "exports", "tslib", "../views/panelView"], function (require, exports, tslib_1, panelView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    panelView = tslib_1.__importStar(panelView);
    var Panel = (function () {
        function Panel() {
            panelView.renderPanel();
        }
        Panel.getInstance = function () {
            if (!Panel.instance) {
                Panel.instance = new Panel();
            }
            return Panel.instance;
        };
        return Panel;
    }());
    exports.default = Panel;
});
//# sourceMappingURL=Panel.js.map