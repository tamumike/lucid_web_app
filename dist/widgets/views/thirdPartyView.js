define(["require", "exports", "jquery", "../views/base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.templates = {
        "Pipelines": {
            dropdown_opts: ["Natural Gas", "Crude Oil", "NGL", "Refined Products"]
        },
        "Facilities": {
            dropdown_opts: ["Compressors", "Meters", "Processing Plants"]
        },
        op_values: {}
    };
    exports.renderWidget = function () {
        var markup = "<div class=" + base_1.CSS.panel_obj.container + ">\n            <p class=" + base_1.CSS.panel_obj.title + ">3rd Party Data</p>\n            <div id=" + base_1.CSS.panel_obj.tab_container + " class=" + base_1.CSS.panel_obj.subcontainer + ">\n                <ul id=" + base_1.CSS.panel_obj.tab_list + ">\n                    <li class=\"" + base_1.CSS.panel_obj.tab + " active-feature\">Pipelines</li>\n                </ul>\n            </div>\n            <button id=" + base_1.CSS.thirdParty.add_btn + " class=\"" + base_1.CSS.panel_obj.button + " " + base_1.CSS.button + "\"><img class=" + base_1.CSS.add_img + " />Add</button>\n            <p class=" + base_1.CSS.panel_obj.heading + ">Layers</p>\n            <div class=" + base_1.CSS.panel_obj.divider2 + "></div>\n            <div class=" + base_1.CSS.panel_obj.subcontainer + ">\n                <ul id=" + base_1.CSS.thirdParty.list + " class=" + base_1.CSS.panel_obj.unordered_list + ">\n                </ul>\n            </div>\n        </div>";
        $(base_1.elements.panel).append(markup);
        exports.renderFeatureMarkup("Pipelines");
    };
    exports.renderFeatureMarkup = function (name) {
        exports.removeFeatureMarkup();
        var markup = "<div id=" + base_1.CSS.thirdParty.action_container + " class=" + base_1.CSS.panel_obj.subcontainer + ">\n            <p class=" + base_1.CSS.panel_obj.heading + ">Select Type</p>\n            <select id=" + base_1.CSS.thirdParty.dropdown + " class=" + base_1.CSS.dropdown + ">" + populateDropdownOptions(name) + "</select>\n        </div>";
        $(markup).insertAfter($(base_1.elements.panel_obj.tab_container));
        populateDropdownOptions(name);
    };
    var populateDropdownOptions = function (name) {
        var options = '';
        exports.templates[name].dropdown_opts.forEach(function (option) {
            options += "<option>" + option + "</option>";
        });
        return options;
    };
    exports.isActive = function (element) {
        return element.hasClass('active-feature');
    };
    exports.toggleCurrentActive = function () {
        var currentActive = $(".active-feature");
        currentActive.each(function (index) {
            $(currentActive[index]).toggleClass("active-feature");
        });
    };
    exports.toggleActiveFeature = function (element) {
        element.toggleClass('active-feature');
    };
    exports.removeFeatureMarkup = function () {
        $(base_1.elements.thirdParty.action_container).remove();
    };
    exports.renderListItem = function (name) {
        if ($("li." + base_1.CSS.thirdParty.list_item + ":contains(" + name + ")").length === 0) {
            var markup = "<li class=" + base_1.CSS.thirdParty.list_item + ">" + name + "</li>";
            $(base_1.elements.thirdParty.list).append(markup);
        }
    };
    exports.removeListItem = function (name) {
        $(base_1.elements.thirdParty.list_item + ":contains(" + name + ")").remove();
    };
    exports.renderFeatureOptions = function (element) {
        var markup = "<div class=" + base_1.CSS.thirdParty.options + ">\n        <img id=" + base_1.CSS.thirdParty.filter_img + " class=" + base_1.CSS.thirdParty.options_img + " title=\"Filter\" />\n        <img id=" + base_1.CSS.thirdParty.remove_img + " class=" + base_1.CSS.thirdParty.options_img + " title=\"Remove\" />\n    </div>";
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
        var existingOptions = $("" + base_1.elements.thirdParty.options);
        existingOptions.each(function (index) {
            if (!$(existingOptions[index]).parent().is(element)) {
                $(existingOptions[index]).remove();
            }
        });
    };
    exports.renderFilterPanel = function (name) {
        var markup = "<div class=" + base_1.CSS.modal.subcontainer + ">\n            <p class=" + base_1.CSS.modal.title + ">" + name + "</p>\n            <div class=" + base_1.CSS.thirdParty.values_container + ">\n                <ul id=" + base_1.CSS.thirdParty.avail_opts + " class=" + base_1.CSS.modal.options_list + ">\n                </ul>\n            </div>\n            <div class=" + base_1.CSS.thirdParty.values_container + ">\n                <ul id=" + base_1.CSS.thirdParty.selected_opts + " class=" + base_1.CSS.modal.options_list + ">\n                </ul>\n            </div>\n            <img class=" + base_1.CSS.search_img + " />\n            <input placeholder=\"Search...\" type=\"text\" id=" + base_1.CSS.thirdParty.op_search + " class=" + base_1.CSS.textbox + "></input>\n        </div>";
        $(base_1.elements.modal.panel).append(markup);
    };
    exports.renderValuesList = function (values, currentExpressions) {
        values.forEach(function (value) {
            var markup = "<li class=" + base_1.CSS.modal.list_item + ">" + value + "</li>";
            if (currentExpressions.indexOf(value) === -1)
                $(base_1.elements.thirdParty.avail_opts).append(markup);
        });
        exports.toggleActiveFilters(currentExpressions);
    };
    exports.toggleActiveFilters = function (values) {
        values.forEach(function (value) {
            var markup = $("<li class=\"" + base_1.CSS.modal.list_item + " active-filter\">" + value + "</li>");
            $(base_1.elements.thirdParty.selected_opts).append(markup);
        });
    };
    exports.transferItem = function (element) {
        var itemContents = [];
        if (element.hasClass('active-filter')) {
            element.detach().appendTo($(base_1.elements.thirdParty.selected_opts));
        }
        else {
            element.detach();
            $(base_1.elements.thirdParty.avail_opts).children('li').each(function (key, value) {
                itemContents.push($(value).text());
            });
            itemContents.push(element.text());
            itemContents.sort();
            var neighbor = itemContents[itemContents.indexOf(element.text()) + 1];
            (neighbor) ? element.insertBefore($("." + base_1.CSS.modal.list_item + ":contains(" + neighbor + ")")) :
                element.appendTo(base_1.elements.thirdParty.avail_opts);
        }
    };
    exports.scrollOptionsDiv = function (value) {
        var $parent = $(base_1.elements.thirdParty.avail_opts).parent();
        var element = $(base_1.elements.thirdParty.avail_opts + " > li:contains(" + value + ")");
        if (element.length > 0) {
            $parent.scrollTop($parent.scrollTop() + element.position().top);
        }
    };
});
//# sourceMappingURL=thirdPartyView.js.map