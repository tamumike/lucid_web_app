define(["require", "exports", "jquery", "./base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderWidget = function () {
        var markup = "<div id=" + base_1.CSS.coordinates.values_container + ">\n        <p id=" + base_1.CSS.coordinates.values + ">0, 0</p>\n        <div id=" + base_1.CSS.coordinates.action_container + ">\n            <img id=" + base_1.CSS.coordinates.copy_btn + " class=" + base_1.CSS.coordinates.action_btn + " title=\"Copy\" />\n            <img id=" + base_1.CSS.coordinates.target_btn + " class=" + base_1.CSS.coordinates.action_btn + " title=\"Target\" />\n        </div>\n    </div>";
        $(base_1.elements.coordinates.container).append(markup);
    };
    exports.setCoordinateValues = function (value) {
        $(base_1.elements.coordinates.values).text(value);
    };
});
//# sourceMappingURL=coordinatesView.js.map