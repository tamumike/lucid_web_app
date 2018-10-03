define(["require", "exports", "tslib", "../views/widgetView"], function (require, exports, tslib_1, widgetView) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    widgetView = tslib_1.__importStar(widgetView);
    var Widget = (function () {
        function Widget(label, ID, inPanel) {
            this.label = label;
            this.ID = ID;
            this.inPanel = inPanel;
            (inPanel) ? widgetView.renderNode(this.label, this.ID) : widgetView.renderOutOfPanelNode(this.ID);
        }
        return Widget;
    }());
    exports.default = Widget;
});
//# sourceMappingURL=Widget.js.map