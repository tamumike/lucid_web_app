define(["require", "exports", "jquery", "../views/base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var templates = {
        "area": {
            units: ["Acres"]
        },
        "length": {
            units: ["Feet", "Miles"]
        }
    };
    exports.renderWidget = function () {
        var markup = "<div class=" + base_1.CSS.panel_obj.container + ">\n        <p class=" + base_1.CSS.panel_obj.title + ">Measure</p>\n        <div id=" + base_1.CSS.panel_obj.tab_container + " class=" + base_1.CSS.panel_obj.subcontainer + ">\n            <ul id=" + base_1.CSS.panel_obj.tab_list + ">\n                <li class=\"" + base_1.CSS.panel_obj.tab + " active-feature\">Area</li>\n                <li class=" + base_1.CSS.panel_obj.tab + ">Length</li>\n            </ul>\n        </div>\n        <div id=" + base_1.CSS.measure.action_container + " class=" + base_1.CSS.panel_obj.subcontainer + ">\n        </div\n    </div>";
        $(base_1.elements.panel).append(markup);
        var type = $('.active-feature').text().trim().toLowerCase();
        exports.renderMeasurementTypeOptions(type);
    };
    exports.renderMeasurementTypeOptions = function (type) {
        exports.removeTypeMarkup();
        var markup = "<label for=\"unitSelect\">Units: </label>\n    <select name=\"unitSelect\" id=" + base_1.CSS.measure.unit_select + " class=" + base_1.CSS.dropdown + ">" + populateSelect(type) + "</select>\n    <br>\n    <button id=" + base_1.CSS.measure.go_btn + " class=" + base_1.CSS.button + "><img class=" + base_1.CSS.measure.is_measuring_img + " /></button>";
        $(base_1.elements.measure.action_container).append(markup);
    };
    var populateSelect = function (type) {
        var markup = "";
        templates[type].units.forEach(function (unit) {
            markup += "<option>" + unit + "</option>";
        });
        return markup;
    };
    exports.isActive = function (element) {
        return element.hasClass("active-feature");
    };
    exports.toggleCurrentActive = function () {
        var currentActive = $(".active-feature");
        currentActive.each(function (index) {
            $(currentActive[index]).toggleClass("active-feature");
        });
    };
    exports.toggleActiveFeature = function (element) {
        element.toggleClass("active-feature");
    };
    exports.removeTypeMarkup = function () {
        $(base_1.elements.measure.action_container).empty();
    };
});
//# sourceMappingURL=measureView.js.map