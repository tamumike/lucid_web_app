define(["require", "exports", "jquery", "../views/base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderNode = function (label, widgetID) {
        var CSS = {
            base: "controller__widget-container",
            nodeId: "controller__widget-" + label,
            imageClass: "controller__widget-img-" + label,
            labelClass: "controller__widget-label"
        };
        var markup = "<div id=" + CSS.nodeId + " class=" + CSS.base + " widgetId=" + widgetID + ">\n            <span class=" + CSS.labelClass + ">" + label.replace('_', ' ').toUpperCase() + "</span>\n        </div>";
        $("#controller__widgets").append(markup);
    };
    exports.renderOutOfPanelNode = function (widgetID) {
        var CSS = {
            outOfPanelBase: widgetID + "__container"
        };
        var markup = "<div id=" + CSS.outOfPanelBase + ">\n    </div>";
        $(markup).insertBefore("" + base_1.elements.app);
    };
    exports.isActive = function (element) {
        return element.hasClass("active-widget");
    };
    exports.toggleActive = function (element) {
        element.toggleClass("active-widget");
    };
    exports.toggleCurrentActive = function () {
        var currentActive = $(".active-widget");
        currentActive.each(function (index) {
            $(currentActive[index]).toggleClass("active-widget");
        });
    };
    exports.getWidget = function (state, id) {
        state.widgets.forEach(function (widget) {
            if (widget.ID == id) {
                state.currentWidget = widget;
            }
        });
    };
});
//# sourceMappingURL=widgetView.js.map