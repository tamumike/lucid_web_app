define(["require", "exports", "jquery", "../views/base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.templates = {
        "Wells": {
            markup: "<div class=" + base_1.CSS.panel_obj.subcontainer + ">\n            <p class=" + base_1.CSS.panel_obj.heading + "></p>\n        </div>",
            op_field: "operator_alias"
        },
        "Production": {
            markup: "",
            op_field: "current_operator"
        },
        "Rigs": {
            markup: "",
            op_field: "operator_name"
        },
        "Permits": {
            markup: "",
            op_field: "operator_alias"
        }
    };
    exports.renderWidget = function () {
        var markup = "<div class=" + base_1.CSS.panel_obj.container + ">\n        <p class=" + base_1.CSS.panel_obj.title + ">Drilling Info</p>\n        <div id=" + base_1.CSS.panel_obj.tab_container + " class=" + base_1.CSS.panel_obj.subcontainer + ">\n            <ul id=" + base_1.CSS.panel_obj.tab_list + ">\n                <li class=\"" + base_1.CSS.panel_obj.tab + " active-feature\">Rigs</li>\n                <li class=" + base_1.CSS.panel_obj.tab + ">Production</li>\n                <li class=" + base_1.CSS.panel_obj.tab + ">Wells</li>\n                <li class=" + base_1.CSS.panel_obj.tab + ">Permits</li>\n            </ul>\n        </div>\n        <div id=" + base_1.CSS.drillingInfo.action_container + " class=" + base_1.CSS.panel_obj.subcontainer + ">\n        </div>\n    </div>";
        $(base_1.elements.panel).append(markup);
        exports.renderFeatureMarkup("Rigs");
    };
    exports.toggleActiveFeature = function (element) {
        element.toggleClass("active-feature");
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
    exports.removeFeatureMarkup = function () {
        $(base_1.elements.drillingInfo.action_container).empty();
    };
    exports.renderFeatureMarkup = function (feature) {
        exports.removeFeatureMarkup();
        var markup = "<p class=" + base_1.CSS.panel_obj.heading + ">" + feature + "</p>\n        <button id=" + base_1.CSS.drillingInfo.add_btn + " class=\"" + base_1.CSS.panel_obj.button + " " + base_1.CSS.button + "\"><img class=" + base_1.CSS.add_img + " />Add</button>\n        <button id=" + base_1.CSS.drillingInfo.remove_btn + " class=\"" + base_1.CSS.panel_obj.button + " " + base_1.CSS.button + "\"><img class=" + base_1.CSS.remove_img + " />Remove</button>\n        <br>\n        <button id=" + base_1.CSS.drillingInfo.search_btn + " class=\"" + base_1.CSS.panel_obj.button + " " + base_1.CSS.button + "\"><img class=" + base_1.CSS.search_img + " />Search By Operator</button>";
        $(base_1.elements.drillingInfo.action_container).append(markup);
    };
    exports.renderSearchPanel = function (name) {
        var markup = "<div class=" + base_1.CSS.modal.subcontainer + ">\n            <p class=" + base_1.CSS.modal.title + ">" + name + "</p>\n            <div class=" + base_1.CSS.drillingInfo.values_container + ">\n                <ul id=" + base_1.CSS.drillingInfo.avail_opts + " class=" + base_1.CSS.modal.options_list + ">\n                </ul>\n            </div>\n            <div class=" + base_1.CSS.drillingInfo.values_container + ">\n                <ul id=" + base_1.CSS.drillingInfo.selected_opts + " class=" + base_1.CSS.modal.options_list + ">\n                </ul>\n            </div>\n            <img class=" + base_1.CSS.search_img + " />\n            <input placeholder=\"Search...\" type=\"text\" id=" + base_1.CSS.drillingInfo.op_search + " class=" + base_1.CSS.textbox + "></input>\n        </div>";
        $(base_1.elements.modal.panel).append(markup);
    };
    exports.renderValuesList = function (values, currentExpressions) {
        values.forEach(function (value) {
            var markup = "<li class=" + base_1.CSS.modal.list_item + ">" + value + "</li>";
            if (currentExpressions.indexOf(value) === -1)
                $(base_1.elements.drillingInfo.avail_opts).append(markup);
        });
        exports.toggleActiveFilters(currentExpressions);
    };
    exports.toggleActiveFilters = function (values) {
        values.forEach(function (value) {
            var markup = $("<li class=\"" + base_1.CSS.modal.list_item + " active-filter\">" + value + "</li>");
            $(base_1.elements.drillingInfo.selected_opts).append(markup);
        });
    };
    exports.transferItem = function (element) {
        var itemContents = [];
        if (element.hasClass('active-filter')) {
            element.detach().appendTo($(base_1.elements.drillingInfo.selected_opts));
        }
        else {
            element.detach();
            $(base_1.elements.drillingInfo.avail_opts).children('li').each(function (key, value) {
                itemContents.push($(value).text());
            });
            itemContents.push(element.text());
            itemContents.sort();
            var neighbor = itemContents[itemContents.indexOf(element.text()) + 1];
            (neighbor) ? element.insertBefore($("." + base_1.CSS.modal.list_item + ":contains(" + neighbor + ")")) :
                element.appendTo(base_1.elements.drillingInfo.avail_opts);
        }
    };
    exports.scrollOptionsDiv = function (value) {
        var $parent = $(base_1.elements.drillingInfo.avail_opts).parent();
        var element = $(base_1.elements.drillingInfo.avail_opts + " > li:contains(" + value + ")");
        if (element.length > 0) {
            $parent.scrollTop($parent.scrollTop() + element.position().top);
        }
    };
});
//# sourceMappingURL=drillingInfoView.js.map