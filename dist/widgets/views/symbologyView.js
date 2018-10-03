define(["require", "exports", "jquery", "../views/base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.excludeNames = ["Lucid System", "STR"];
    exports.renderWidget = function () {
        var markup = "<div class=" + base_1.CSS.panel_obj.container + ">\n        <p class=" + base_1.CSS.panel_obj.title + ">Symbology</p>\n        <div class=" + base_1.CSS.panel_obj.divider + "></div>\n        <p class=" + base_1.CSS.panel_obj.heading + ">Select Layer</p>\n        <div class=" + base_1.CSS.panel_obj.divider2 + "></div>\n        <ul id=" + base_1.CSS.symbology.list + " class=" + base_1.CSS.panel_obj.unordered_list + ">\n            <li class=\"" + base_1.CSS.panel_obj.list_item + " placeholder\">No Current Layers</li>\n        </ul>\n    </div>";
        $(base_1.elements.panel).append(markup);
    };
    exports.renderListItem = function (names) {
        if (names.length > 0)
            $("li.placeholder").remove();
        names.forEach(function (name) {
            var markup = "<li class=" + base_1.CSS.symbology.list_item + ">" + name + "</li>";
            $(base_1.elements.symbology.list).append(markup);
        });
    };
    exports.renderSymbologyPanel = function (name, info) {
        var markup = "<div class=" + base_1.CSS.modal.subcontainer + ">\n            <p class=" + base_1.CSS.modal.title + ">" + name + "</p>\n            <div class=" + base_1.CSS.symbology.values_container + ">\n                <ul id=" + base_1.CSS.symbology.avail_opts + " class=" + base_1.CSS.modal.options_list + ">\n                    " + renderValuesList(name, info) + "\n                </ul>\n            </div>\n            <div id=" + base_1.CSS.symbology.render_container + " class=" + base_1.CSS.symbology.values_container + ">\n                <label class=" + base_1.CSS.symbology.label + " for=" + base_1.CSS.symbology.opacity_input + ">Opacity</label>\n                <input type=\"text\" size=\"3\" maxLength=\"3\" id=" + base_1.CSS.symbology.opacity_input + " class=" + base_1.CSS.textbox + " />\n                <div id=" + base_1.CSS.symbology.slider_container + ">\n                    <input type=\"range\" id=" + base_1.CSS.symbology.slider_r + " class=" + base_1.CSS.symbology.slider + " min=\"0\" max=\"255\" />\n                    <input type=\"range\" id=" + base_1.CSS.symbology.slider_g + " class=" + base_1.CSS.symbology.slider + " min=\"0\" max=\"255\" />\n                    <input type=\"range\" id=" + base_1.CSS.symbology.slider_b + " class=" + base_1.CSS.symbology.slider + " min=\"0\" max=\"255\" />\n                </div>\n                <div id=" + base_1.CSS.symbology.display_container + ">\n                    <div id=" + base_1.CSS.symbology.previous_color_display + " class=" + base_1.CSS.symbology.color_display + ">\n                        <p class=" + base_1.CSS.symbology.display_label + ">Previous</p>\n                    </div>\n                    <div id=" + base_1.CSS.symbology.current_color_display + " class=" + base_1.CSS.symbology.color_display + ">\n                        <p class=" + base_1.CSS.symbology.display_label + ">Current</p>\n                    </div>\n                </div>\n            </div>\n            <img class=" + base_1.CSS.search_img + " />\n            <input placeholder=\"Search...\" type=\"text\" id=" + base_1.CSS.symbology.lyr_search + " class=" + base_1.CSS.textbox + "></input>\n        </div>";
        $(base_1.elements.modal.panel).append(markup);
        $(base_1.elements.modal.list_item).first().toggleClass('active-filter');
        exports.setElementValues($('.active-filter').text().trim(), info);
    };
    var renderValuesList = function (name, info) {
        var markup = '';
        if (info.definitionExpression && info.definitionExpression !== '') {
            info.definitionExpression.forEach(function (value) {
                markup += "<li class=" + base_1.CSS.modal.list_item + ">" + value + "</li>";
            });
        }
        else if (info.renderer.type === "unique-value") {
            info.renderer.uniqueValueInfos.forEach(function (value) {
                markup += "<li class=" + base_1.CSS.modal.list_item + ">" + value.value + "</li>";
            });
        }
        else {
            markup += "<li class=" + base_1.CSS.modal.list_item + ">" + name + "</li>";
        }
        return markup;
    };
    exports.setElementValues = function (name, props) {
        var symbol;
        (props.renderer.type === "unique-value") ?
            symbol = getUniqueValueColor(name, props.newRenderer) :
            symbol = getSimpleValueColor(props.newRenderer);
        $(base_1.elements.symbology.slider_r).val(symbol.symbol.color[0]);
        $(base_1.elements.symbology.slider_g).val(symbol.symbol.color[1]);
        $(base_1.elements.symbology.slider_b).val(symbol.symbol.color[2]);
        $(base_1.elements.symbology.opacity_input).val((props.opacity * 100));
        exports.updateColorDisplay($(base_1.elements.symbology.previous_color_display), props, name);
        exports.updateColorDisplay($(base_1.elements.symbology.current_color_display));
    };
    var getUniqueValueColor = function (name, rendererProps) {
        var valueInfo = {};
        if (name.indexOf('Acreage') !== -1) {
            name = name.slice(name.indexOf('-') + 1).trim();
        }
        valueInfo = rendererProps.uniqueValueInfos.filter(function (info) {
            return info.value === name;
        });
        return {
            symbol: valueInfo[0].symbol
        };
    };
    var getSimpleValueColor = function (rendererProps) {
        return {
            symbol: rendererProps.symbol
        };
    };
    exports.getSliderValues = function () {
        return {
            r: Number($(base_1.elements.symbology.slider_r).val()),
            g: Number($(base_1.elements.symbology.slider_g).val()),
            b: Number($(base_1.elements.symbology.slider_b).val())
        };
    };
    exports.updateColorDisplay = function (element, props, name) {
        var elementID = element.attr('id');
        var slider = exports.getSliderValues();
        if (elementID === 'symbology__current-color-display') {
            element.css({
                "background-color": "rgb(" + slider.r + ", " + slider.g + ", " + slider.b + ")"
            });
        }
        else {
            var value = void 0;
            if (props) {
                if (props.renderer.type === 'unique-value') {
                    value = props.renderer.uniqueValueInfos.filter(function (info) {
                        return info.value === name;
                    })[0].symbol.color;
                }
                else {
                    value = props.renderer.symbol.color;
                }
            }
            else {
                value = [slider.r, slider.g, slider.b];
            }
            element.css({
                "background-color": "rgb(" + value[0] + ", " + value[1] + ", " + value[2] + ")"
            });
        }
    };
    exports.toggleCurrentActive = function () {
        var currentActive = $(".active-filter");
        currentActive.each(function (index) {
            $(currentActive[index]).toggleClass("active-filter");
        });
    };
    exports.setRendererProps = function (props) {
        var name = $('.active-filter').text().trim();
        var sliders = exports.getSliderValues();
        if (props.renderer.type === 'unique-value') {
            props.newRenderer.uniqueValueInfos.forEach(function (info) {
                if (info.value === name) {
                    info.symbol.color = [sliders.r, sliders.g, sliders.b];
                }
            });
        }
        else {
            props.newRenderer.symbol.color = [sliders.r, sliders.g, sliders.b];
        }
        props.opacity = parseInt($(base_1.elements.symbology.opacity_input).val()) * 0.01;
    };
    exports.getSearchInput = function (element, layers) {
        var input = element.val();
        var subArray;
        subArray = layers.filter(function (value) {
            return value.startsWith(input.toUpperCase());
        });
        scrollOptionsDiv(subArray[0]);
    };
    var scrollOptionsDiv = function (value) {
        var $parent = $(base_1.elements.symbology.avail_opts).parent();
        var element = $(base_1.elements.symbology.avail_opts + " > li:contains(" + value + ")");
        if (element.length > 0) {
            $parent.scrollTop($parent.scrollTop() + element.position().top);
        }
    };
});
//# sourceMappingURL=symbologyView.js.map