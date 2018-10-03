define(["require", "exports", "jquery", "../views/base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var acreageProducers = [
        "All",
        "Ameredev",
        "Apache",
        "BHP",
        "Caza",
        "Centennial",
        "Chevron",
        "Chi",
        "Chisholm",
        "Cimarex",
        "Concho",
        "Devon",
        "Energen",
        "EOG",
        "Halcon",
        "Kaiser Francis",
        "Lilis",
        "Limestone",
        "Marathon",
        "Matador",
        "Mewbourne",
        "Murchison",
        "Oasis",
        "Read & Stevens",
        "Taprock",
        "WPX",
        "XTO"
    ];
    exports.renderWidget = function () {
        var markup = "<div class=" + base_1.CSS.panel_obj.container + ">\n        <p class=" + base_1.CSS.panel_obj.title + ">Acreage</p>\n        <div class=" + base_1.CSS.panel_obj.divider + "></div>\n        <p class=" + base_1.CSS.panel_obj.heading + ">Select Operator</p>\n        <select id=" + base_1.CSS.acreage.dropdown + " class=" + base_1.CSS.dropdown + "></select>\n        <div class=" + base_1.CSS.panel_obj.subcontainer + ">\n            <button id=" + base_1.CSS.acreage.add + " class=\"" + base_1.CSS.panel_obj.button + " " + base_1.CSS.button + "\"><img class=" + base_1.CSS.add_img + " />Add</button>\n        </div>\n        <div class=" + base_1.CSS.panel_obj.subcontainer + ">\n            <ul id=" + base_1.CSS.acreage.list + " class=" + base_1.CSS.panel_obj.unordered_list + ">\n            </ul>\n        </div>\n        <button id=" + base_1.CSS.acreage.removeAll + " class=\"" + base_1.CSS.panel_obj.button + " " + base_1.CSS.button + "\"><img class=" + base_1.CSS.remove_img + " />Remove All</button>\n    </div>";
        $(base_1.elements.panel).append(markup);
    };
    exports.renderListItem = function (text) {
        if ($("li." + base_1.CSS.acreage.list_item + ":contains(" + text + ")").length === 0) {
            var markup = "<li class=" + base_1.CSS.acreage.list_item + ">" + text + "</li>";
            $(base_1.elements.acreage.list).append(markup);
        }
    };
    exports.removeListItem = function (text) {
        $(base_1.elements.acreage.list + " li:contains(" + text + ")").remove();
    };
    exports.renderFeatureOptions = function (element) {
        var markup = "<div class=" + base_1.CSS.acreage.options + ">\n        <img id=" + base_1.CSS.acreage.filter_img + " class=" + base_1.CSS.acreage.options_img + " title=\"Filter\" />\n        <img id=" + base_1.CSS.acreage.remove_img + " class=" + base_1.CSS.acreage.options_img + " title=\"Remove\" />\n    </div>";
        if (!hasOptions(element)) {
            element.append(markup);
            removeExistingOptions(element);
        }
        else {
            element.children().remove();
        }
    };
    var hasOptions = function (element) {
        return (element.children().length > 0) ? true : false;
    };
    var removeExistingOptions = function (element) {
        var existingOptions = $("" + base_1.elements.acreage.options);
        existingOptions.each(function (index) {
            if (!$(existingOptions[index]).parent().is(element)) {
                $(existingOptions[index]).remove();
            }
        });
    };
    exports.renderFilterPanel = function (name) {
        var markup = "<div class=" + base_1.CSS.modal.subcontainer + ">\n            <p class=" + base_1.CSS.modal.title + ">" + name + "</p>\n            <p class=" + base_1.CSS.modal.heading + ">Add Filter: </p>\n            <select id=" + base_1.CSS.modal.dropdown + " class=" + base_1.CSS.dropdown + ">\n                <option value=\"dedication\">Dedication</option>\n            </select>\n            <div id=" + base_1.CSS.acreage.action_container + ">\n                <ul id=" + base_1.CSS.acreage.filter_list + " class=" + base_1.CSS.modal.options_list + ">\n            </div>\n            </ul>\n        </div>";
        $(base_1.elements.modal.panel).append(markup);
    };
    exports.toggleActiveFilters = function (values) {
        values.forEach(function (value) {
            var list = $(base_1.elements.modal.options_list + " > li" + base_1.elements.modal.list_item);
            list.each(function (index, element) {
                if ($(element).text() === value)
                    $(element).toggleClass('active-filter');
            });
        });
    };
    exports.populateSelect = function () {
        acreageProducers.forEach(function (producer) {
            $(base_1.elements.acreage.dropdown).append("<option>" + producer + "</option>");
        });
    };
    exports.populateFieldValues = function (features) {
        var uniqueValues = [];
        features.forEach(function (feature) {
            var value = feature.attributes.Dedication;
            if (uniqueValues.indexOf(value) === -1)
                uniqueValues.push(value);
        });
        renderFieldValuesList(uniqueValues);
    };
    var renderFieldValuesList = function (values) {
        values.forEach(function (value) {
            var markup = "<li class=" + base_1.CSS.modal.list_item + ">" + value + "</li>";
            $(base_1.elements.acreage.filter_list).append(markup);
        });
    };
});
//# sourceMappingURL=acreageView.js.map