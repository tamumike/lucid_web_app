define(["require", "exports", "jquery", "../views/base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderPanel = function () {
        var markup = "<div id=" + base_1.CSS.panel + "></div>";
        $(markup).insertBefore($("" + base_1.elements.app));
    };
    exports.showPanel = function (label) {
        return $("" + base_1.elements.panel).show();
    };
    exports.destroyPanel = function () {
        $("" + base_1.elements.panel).empty().hide();
    };
});
//# sourceMappingURL=panelView.js.map