define(["require", "exports", "jquery", "./base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderWidget = function () {
        var markup = "<div class=" + base_1.CSS.panel_obj.container + ">\n            <p class=" + base_1.CSS.panel_obj.title + ">Layers</p>\n            <div class=" + base_1.CSS.panel_obj.divider + "></div>\n            <p class=" + base_1.CSS.panel_obj.heading + ">Toggle Layer Visibility</p>\n            <div id=" + base_1.CSS.layers.action_container + " class=" + base_1.CSS.panel_obj.subcontainer + ">\n                <ul id=" + base_1.CSS.layers.list + " class=" + base_1.CSS.panel_obj.unordered_list + ">\n                </ul>\n            </div>\n        </div>";
        $(base_1.elements.panel).append(markup);
    };
    exports.populateLayersList = function (visible, notVisible) {
        visible.forEach(function (layer) {
            $(base_1.elements.layers.list).append("<li class=" + base_1.CSS.panel_obj.list_item + ">" + layer + "</li>");
        });
        notVisible.forEach(function (layer) {
            $(base_1.elements.layers.list).append("<li class=\"" + base_1.CSS.panel_obj.list_item + " placeholder\">" + layer + "</li>");
        });
    };
});
//# sourceMappingURL=layersView.js.map