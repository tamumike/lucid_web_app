define(["require", "exports", "tslib", "jquery", "./widgets/models/App", "./widgets/models/Panel", "./widgets/models/Modal", "./widgets/models/Acreage", "./widgets/models/Coordinates", "./widgets/models/DrillingInfo", "./widgets/models/ThirdParty", "./widgets/models/Symbology", "./widgets/models/Measure", "./widgets/models/Layers", "./widgets/views/panelView", "./widgets/views/widgetView", "./widgets/views/acreageView", "./widgets/views/drillingInfoView", "./widgets/views/thirdPartyView", "./widgets/views/symbologyView", "./widgets/views/measureView", "./widgets/views/base", "./config", "@dojo/shim/Promise"], function (require, exports, tslib_1, $, App_1, Panel_1, Modal_1, Acreage_1, Coordinates_1, DrillingInfo_1, ThirdParty_1, Symbology_1, Measure_1, Layers_1, panelView, widgetView, acreageView, drillingInfoView, thirdPartyView, symbologyView, measureView, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    App_1 = tslib_1.__importDefault(App_1);
    Panel_1 = tslib_1.__importDefault(Panel_1);
    Modal_1 = tslib_1.__importDefault(Modal_1);
    Acreage_1 = tslib_1.__importDefault(Acreage_1);
    Coordinates_1 = tslib_1.__importDefault(Coordinates_1);
    DrillingInfo_1 = tslib_1.__importDefault(DrillingInfo_1);
    ThirdParty_1 = tslib_1.__importDefault(ThirdParty_1);
    Symbology_1 = tslib_1.__importDefault(Symbology_1);
    Measure_1 = tslib_1.__importDefault(Measure_1);
    Layers_1 = tslib_1.__importDefault(Layers_1);
    panelView = tslib_1.__importStar(panelView);
    widgetView = tslib_1.__importStar(widgetView);
    acreageView = tslib_1.__importStar(acreageView);
    drillingInfoView = tslib_1.__importStar(drillingInfoView);
    thirdPartyView = tslib_1.__importStar(thirdPartyView);
    symbologyView = tslib_1.__importStar(symbologyView);
    measureView = tslib_1.__importStar(measureView);
    var state = {};
    exports.appController = function () {
        var app = new App_1.default();
        state.widgets = [new Layers_1.default(), new Acreage_1.default(), new Coordinates_1.default(), new DrillingInfo_1.default(), new ThirdParty_1.default(), new Symbology_1.default(), new Measure_1.default()];
        state.acreage = [];
        var launchWidget = function (currentWidget) {
            (currentWidget == "acreage") ? controlAcreage() :
                (currentWidget == "drillInfo") ? controlDrillingInfo() :
                    (currentWidget == "thirdParty") ? controlThirdParty() :
                        (currentWidget == "symbology") ? controlSymbology() :
                            (currentWidget == "measure") ? controlMeasure() :
                                (currentWidget == "layers") ? controlLayers() :
                                    console.log('no Widget');
        };
        $("" + base_1.elements.widget_container).on("click", function (e) {
            e.stopImmediatePropagation();
            Panel_1.default.getInstance();
            app.applicationMap.view.graphics.removeAll();
            var $this = $(e.currentTarget);
            widgetView.getWidget(state, $this.attr("widgetid"));
            if (!widgetView.isActive($this)) {
                panelView.destroyPanel();
                panelView.showPanel($($this).attr('widgetid'));
                widgetView.toggleCurrentActive();
                widgetView.toggleActive($this);
                state.currentWidget.render();
                launchWidget(state.currentWidget.ID);
            }
            else {
                panelView.destroyPanel();
                widgetView.toggleActive($this);
            }
        });
        var controlLayers = function () {
            var widget = state.currentWidget;
            var appMap = app.applicationMap.map;
            widget.listLayers(appMap);
            $(base_1.elements.layers.list).on('click', 'li.panel__widget-list_item', function (e) {
                var $this = $(e.currentTarget);
                $this.toggleClass('placeholder');
                widget.toggleVisibility(appMap, $this.text().trim());
            });
        };
        var controlAcreage = function () {
            var widget = state.currentWidget;
            var appMap = app.applicationMap.map;
            acreageView.populateSelect();
            widget.addCurrentLayersToList(state);
            $(base_1.elements.acreage.add_btn).on('click', function () {
                var producer = $(base_1.elements.acreage.dropdown).val();
                widget.addFeature(appMap, producer, state);
                acreageView.renderListItem(producer);
            });
            $(base_1.elements.acreage.list).on('click', "li." + base_1.CSS.acreage.list_item, function (e) {
                e.stopImmediatePropagation();
                acreageView.renderFeatureOptions($(e.currentTarget));
            });
            $(base_1.elements.acreage.list).on('click', "img#" + base_1.CSS.acreage.filter_img, function (e) {
                e.stopImmediatePropagation();
                var featureName = $(e.currentTarget).parent().parent().text().trim();
                var modal = new Modal_1.default();
                acreageView.renderFilterPanel(featureName);
                var currentExpressions = widget.getCurrentDefinitionQuery(appMap, featureName);
                widget.queryLayer(featureName, state, currentExpressions);
                $(base_1.elements.modal.options_list).on('click', "li." + base_1.CSS.modal.list_item, function (e) {
                    var $this = e.currentTarget;
                    $($this).toggleClass('active-filter');
                });
                $(base_1.elements.modal.apply_btn).on('click', function (e) {
                    e.preventDefault();
                    var selectedOptions = [];
                    var fieldName = $(base_1.elements.modal.dropdown).text().trim();
                    $('.active-filter').each(function (key, value) {
                        selectedOptions.push($(value).text().trim());
                    });
                    widget.applyFilter({
                        map: appMap,
                        name: featureName,
                        definitionQuery: widget.generateDefinitionQuery(fieldName, selectedOptions)
                    });
                });
                $(base_1.elements.modal.ok_btn).on('click', function (e) {
                    $(base_1.elements.modal.apply_btn).trigger('click');
                    modal.removeModal();
                });
                $(base_1.elements.modal.cancel_btn).on('click', function (e) {
                    modal.removeModal();
                });
            });
            $(base_1.elements.acreage.list).on('click', "img#" + base_1.CSS.acreage.remove_img, function (e) {
                e.stopImmediatePropagation();
                var featureName = $(e.currentTarget).parent().parent().text().trim();
                widget.removeFeature(appMap, featureName, state);
            });
            $(base_1.elements.acreage.remove_all_btn).on('click', function () {
                widget.removeAllFeatures(appMap, state);
                state.acreage = [];
            });
        };
        var controlCoordinates = function () {
            var appView = app.applicationMap.view;
            var widget = state.widgets.filter(function (item) {
                return item.ID === 'coordinates';
            })[0];
            widget.pointerMoveEvent(appView);
            widget.targetEvent(appView);
            $(base_1.elements.coordinates.target_btn).on('click', function (e) {
                $(e.currentTarget).toggleClass('active');
            });
            $(base_1.elements.coordinates.copy_btn).on('click', function (e) {
                widget.copyEvent();
            });
        };
        var controlDrillingInfo = function () {
            var widget = state.currentWidget;
            var appMap = app.applicationMap.map;
            var feature = $('.active-feature').text().trim();
            $(base_1.elements.panel_obj.tab).on('click', function (e) {
                var $this = $(e.currentTarget);
                feature = $this.text();
                if (!drillingInfoView.isActive($this)) {
                    drillingInfoView.toggleCurrentActive();
                    drillingInfoView.toggleActiveFeature($this);
                    drillingInfoView.renderFeatureMarkup(feature);
                }
                else {
                    drillingInfoView.toggleActiveFeature($this);
                    drillingInfoView.removeFeatureMarkup();
                }
            });
            $(base_1.elements.drillingInfo.action_container).on('click', "button#" + base_1.CSS.drillingInfo.add_btn, function (e) {
                widget.addFeature(appMap, feature);
            });
            $(base_1.elements.drillingInfo.action_container).on('click', "button#" + base_1.CSS.drillingInfo.remove_btn, function (e) {
                widget.removeFeature(appMap, feature);
            });
            $(base_1.elements.drillingInfo.action_container).on('click', "button#" + base_1.CSS.drillingInfo.search_btn, function (e) {
                var modal = new Modal_1.default();
                drillingInfoView.renderSearchPanel(feature);
                var currentExpressions = widget.getCurrentDefinitionQuery(appMap, feature);
                (!drillingInfoView.templates[feature].values) ? widget.queryLayer(feature, "Label <> '$$$'", state, currentExpressions) :
                    drillingInfoView.renderValuesList(drillingInfoView.templates[feature].values, currentExpressions);
                $(base_1.elements.drillingInfo.values_container).on('click', "li." + base_1.CSS.modal.list_item, function (e) {
                    var $this = e.currentTarget;
                    $($this).toggleClass('active-filter');
                    drillingInfoView.transferItem($($this));
                });
                $(base_1.elements.drillingInfo.op_search).on('keyup', function (e) {
                    widget.getSearchInput($(e.currentTarget), feature);
                });
                $(base_1.elements.modal.apply_btn).on('click', function (e) {
                    e.preventDefault();
                    var selectedOptions = [];
                    $('.active-filter').each(function (key, value) {
                        selectedOptions.push($(value).text().trim());
                    });
                    widget.applyFilter({
                        name: feature,
                        definitionQuery: widget.generateDefinitionQuery(drillingInfoView.templates[feature].op_field, selectedOptions),
                        map: appMap
                    });
                });
                $(base_1.elements.modal.ok_btn).on('click', function (e) {
                    $(base_1.elements.modal.apply_btn).trigger('click');
                    modal.removeModal();
                });
                $(base_1.elements.modal.cancel_btn).on('click', function (e) {
                    modal.removeModal();
                });
            });
        };
        var controlThirdParty = function () {
            var widget = state.currentWidget;
            var appMap = app.applicationMap.map;
            var feature = $('.active-feature').text().trim();
            widget.addCurrentLayersToList(appMap, feature);
            $(base_1.elements.thirdParty.add_btn).on('click', function (e) {
                e.preventDefault();
                var featureClass = $(base_1.elements.thirdParty.dropdown).val();
                widget.addFeature(appMap, featureClass);
                thirdPartyView.renderListItem(featureClass);
            });
            $(base_1.elements.thirdParty.list).on('click', "li." + base_1.CSS.thirdParty.list_item, function (e) {
                e.stopImmediatePropagation();
                thirdPartyView.renderFeatureOptions($(e.currentTarget));
            });
            $(base_1.elements.thirdParty.list).on('click', "img#" + base_1.CSS.thirdParty.remove_img, function (e) {
                e.stopImmediatePropagation();
                var featureName = $(e.currentTarget).parent().parent().text().trim();
                widget.removeFeature(appMap, featureName);
            });
            $(base_1.elements.thirdParty.list).on('click', "img#" + base_1.CSS.thirdParty.filter_img, function (e) {
                var modal = new Modal_1.default();
                var featureName = $(e.currentTarget).parent().parent().text().trim();
                var currentExpressions = widget.getCurrentDefinitionQuery(appMap, featureName);
                thirdPartyView.renderFilterPanel(featureName);
                (!thirdPartyView.templates.op_values[featureName]) ? widget.queryLayer(appMap, featureName, currentExpressions) :
                    thirdPartyView.renderValuesList(thirdPartyView.templates.op_values[featureName], currentExpressions);
                $(base_1.elements.thirdParty.values_container).on('click', "li." + base_1.CSS.modal.list_item, function (e) {
                    var $this = e.currentTarget;
                    $($this).toggleClass('active-filter');
                    thirdPartyView.transferItem($($this));
                });
                $(base_1.elements.modal.apply_btn).on('click', function (e) {
                    e.preventDefault();
                    var selectedOptions = [];
                    $('.active-filter').each(function (key, value) {
                        selectedOptions.push($(value).text().trim());
                    });
                    widget.applyFilter(appMap, featureName, widget.generateDefinitionQuery(selectedOptions));
                });
                $(base_1.elements.modal.ok_btn).on('click', function (e) {
                    $(base_1.elements.modal.apply_btn).trigger('click');
                    modal.removeModal();
                });
                $(base_1.elements.thirdParty.op_search).on('keyup', function (e) {
                    widget.getSearchInput($(e.currentTarget), featureName);
                });
            });
        };
        var controlSymbology = function () {
            var widget = state.currentWidget;
            var appMap = app.applicationMap.map;
            $(base_1.elements.symbology.list).on('click', "li." + base_1.CSS.symbology.list_item, function (e) {
                var $this = e.currentTarget;
                var name = $($this).text().trim();
                var modal = new Modal_1.default();
                var info = widget.getLayerInfo(appMap, name);
                $(base_1.elements.modal.panel).on('click', 'li.modal__list-item', function (e) {
                    symbologyView.setRendererProps(info);
                    symbologyView.toggleCurrentActive();
                    $(e.currentTarget).toggleClass('active-filter');
                    symbologyView.setElementValues($(e.currentTarget).text().trim(), info);
                });
                $(base_1.elements.modal.apply_btn).on('click', function (e) {
                    e.preventDefault();
                    symbologyView.setRendererProps(info);
                    widget.setRenderer(appMap, name, info);
                });
                $(base_1.elements.modal.ok_btn).on('click', function (e) {
                    e.preventDefault();
                    $(base_1.elements.modal.apply_btn).trigger('click');
                    modal.removeModal();
                });
                $(base_1.elements.modal.cancel_btn).on('click', function (e) {
                    modal.removeModal();
                });
                $(base_1.elements.modal.panel).on('input', "input." + base_1.CSS.symbology.slider, function (e) {
                    symbologyView.updateColorDisplay($(base_1.elements.symbology.current_color_display));
                });
                $(base_1.elements.modal.panel).on('keyup', "input#" + base_1.CSS.symbology.lyr_search, function (e) {
                    var lyrNames = [];
                    $(base_1.elements.modal.list_item).each(function (index, value) {
                        lyrNames.push(value.textContent);
                    });
                    symbologyView.getSearchInput($(e.currentTarget), lyrNames);
                });
            });
        };
        var controlMeasure = function () {
            var appView = app.applicationMap.view;
            var widget = state.currentWidget;
            var type = $('.active-feature').text().trim().toLowerCase();
            $(base_1.elements.panel_obj.tab).on('click', function (e) {
                var $this = $(e.currentTarget);
                if (!$(base_1.elements.measure.go_btn).hasClass('is_measuring')) {
                    type = $this.text().trim().toLowerCase();
                    if (!measureView.isActive($this)) {
                        measureView.toggleCurrentActive();
                        measureView.toggleActiveFeature($this);
                        measureView.renderMeasurementTypeOptions(type);
                    }
                    else {
                        measureView.toggleActiveFeature($this);
                        measureView.removeTypeMarkup();
                    }
                    appView.graphics.removeAll();
                }
            });
            $(base_1.elements.measure.action_container).on('click', "button#" + base_1.CSS.measure.go_btn, function (e) {
                e.preventDefault();
                var $this = $(e.currentTarget);
                $this.toggleClass('is_measuring');
                widget.addMeasurement(appView, type);
            });
        };
        controlCoordinates();
    };
    function isIE() {
        var ua = navigator.userAgent;
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1 || ua.indexOf('Edge/') > -1;
        return is_ie;
    }
    if (isIE()) {
        alert('This application must be used with Google Chrome. Internet Explorer is not supported');
    }
    else {
        exports.appController();
    }
});
//# sourceMappingURL=index.js.map