import "./config";
import $ = require("jquery");

import "@dojo/shim/Promise";

import App from "./widgets/models/App";
import Panel from "./widgets/models/Panel";
import Modal from "./widgets/models/Modal";
import Acreage from "./widgets/models/Acreage";
import Coordinates from "./widgets/models/Coordinates";
import DrillingInfo from "./widgets/models/DrillingInfo";
import ThirdParty from "./widgets/models/ThirdParty";
import Symbology from "./widgets/models/Symbology";
import Measure from "./widgets/models/Measure";

import * as panelView from "./widgets/views/panelView";
import * as widgetView from "./widgets/views/widgetView";
import * as acreageView from "./widgets/views/acreageView";
import * as drillingInfoView from "./widgets/views/drillingInfoView";
import * as thirdPartyView from "./widgets/views/thirdPartyView";
import * as symbologyView from "./widgets/views/symbologyView";
import * as measureView from "./widgets/views/measureView";

import {CSS, elements} from "./widgets/views/base";

const state: {[key: string]: any} = {};

export const appController = () => {

  const app = new App();  

  state.widgets = [new Acreage(), new Coordinates(), new DrillingInfo(), new ThirdParty(), new Symbology(), new Measure()];
  state.acreage = [];

  const launchWidget = (currentWidget: string): void => {
    
    (currentWidget == "acreage") ? controlAcreage() : 
    (currentWidget == "drillInfo") ? controlDrillingInfo() : 
    (currentWidget == "thirdParty") ? controlThirdParty() : 
    (currentWidget == "symbology") ? controlSymbology() : 
    (currentWidget == "measure") ? controlMeasure() : 
    console.log('no Widget');

  };

  /* 
  * Events 
  */
  $(`${elements.widget_container}`).on("click", (e) => {

    e.stopImmediatePropagation();
    Panel.getInstance();
    var $this = $(e.currentTarget);

    widgetView.getWidget(state, $this.attr("widgetid"));

    if (!widgetView.isActive($this)) {

      panelView.destroyPanel();
      panelView.showPanel($($this).attr('widgetid') as string);
      widgetView.toggleCurrentActive();
      widgetView.toggleActive($this);
      state.currentWidget.render();
      launchWidget(state.currentWidget.ID);
      
    } else {

      panelView.destroyPanel();
      widgetView.toggleActive($this);

    }

  });

  /* 
  * Acreage Controller 
  */
  const controlAcreage = () => {

    const widget = state.currentWidget;
    const appMap = app.applicationMap.map;

    // Populate the dropdown menu
    acreageView.populateSelect();

    // Add current acreage layers to the list
    widget.addCurrentLayersToList(state);

    // Acreage Events
    $(elements.acreage.add_btn).on('click', () => {

      let producer: string = ($(elements.acreage.dropdown).val() as string);

      widget.addFeature(appMap, producer, state);

      acreageView.renderListItem(producer);
    
    });

    $(elements.acreage.list).on('click', `li.${CSS.acreage.list_item}`, (e) => {
      
      e.stopImmediatePropagation();

      acreageView.renderFeatureOptions($(e.currentTarget));
      
    });

    $(elements.acreage.list).on('click', `img#${CSS.acreage.filter_img}`, (e) => {

      e.stopImmediatePropagation();

      const featureName = $(e.currentTarget).parent().parent().text().trim();

      const modal = new Modal();

      acreageView.renderFilterPanel(featureName);

      let currentExpressions = widget.getCurrentDefinitionQuery(appMap, featureName);

      widget.queryLayer(featureName, state, currentExpressions);      


      $(elements.modal.options_list).on('click', `li.${CSS.modal.list_item}`, (e) => {
        
        let $this = e.currentTarget;

        $($this).toggleClass('active-filter');
        
      });

      $(elements.modal.apply_btn).on('click', (e) => {
        
        e.preventDefault();

        const selectedOptions: string[] = [];

        const fieldName: string = $(elements.modal.dropdown).text().trim();

        $('.active-filter').each((key, value) => {

          selectedOptions.push($(value).text().trim());

        });
        
        widget.applyFilter({
          map: appMap,
          name: featureName,
          definitionQuery: widget.generateDefinitionQuery(fieldName, selectedOptions)
        });

      });

      $(elements.modal.ok_btn).on('click', (e) => {

        $(elements.modal.apply_btn).trigger('click');

        modal.removeModal();
      
      });
      
      $(elements.modal.cancel_btn).on('click', (e) => {

        modal.removeModal();
        
      });
      
    });

    $(elements.acreage.list).on('click', `img#${CSS.acreage.remove_img}`, (e) => {

      e.stopImmediatePropagation();

      const featureName = $(e.currentTarget).parent().parent().text().trim();

      widget.removeFeature(appMap, featureName, state);

    });

    $(elements.acreage.remove_all_btn).on('click', () => {

      widget.removeAllFeatures(appMap, state);

      state.acreage = [];

    });
    
  };

  /* 
  * Coordinates Controller 
  */
  const controlCoordinates = () => {
    
    const appView = app.applicationMap.view;
    
    const widget = state.widgets.filter(item => {

      return item.ID === 'coordinates';

    })[0];

    widget.pointerMoveEvent(appView);

    widget.targetEvent(appView);

    $(elements.coordinates.target_btn).on('click', (e) => {

      $(e.currentTarget).toggleClass('active');

    });

    $(elements.coordinates.copy_btn).on('click', (e) => {

      widget.copyEvent();

    });
    
  };

  /*
   * Drilling Info Controller 
   */
  const controlDrillingInfo = () => {
    
    const widget = state.currentWidget;
    const appMap = app.applicationMap.map;

    let feature: string = $('.active-feature').text().trim();

    // Drilling Info Events
    $(elements.panel_obj.tab).on('click', (e) => {
      
      const $this = $(e.currentTarget);
      
      feature = $this.text();

      if (!drillingInfoView.isActive($this)) {

        drillingInfoView.toggleCurrentActive();
        drillingInfoView.toggleActiveFeature($this);
        drillingInfoView.renderFeatureMarkup(feature);

      } else {

        drillingInfoView.toggleActiveFeature($this);
        drillingInfoView.removeFeatureMarkup();
      
      }
      
    });

    $(elements.drillingInfo.action_container).on('click', `button#${CSS.drillingInfo.add_btn}`, (e) => {
      
      widget.addFeature(appMap, feature);
      
    });

    $(elements.drillingInfo.action_container).on('click', `button#${CSS.drillingInfo.remove_btn}`, (e) => {

      widget.removeFeature(appMap, feature);

    });

    $(elements.drillingInfo.action_container).on('click', `button#${CSS.drillingInfo.search_btn}`, (e) => {

      const modal = new Modal();

      drillingInfoView.renderSearchPanel(feature);

      let currentExpressions = widget.getCurrentDefinitionQuery(appMap, feature);

      (!drillingInfoView.templates[feature].values) ? widget.queryLayer(feature, "Label <> '$$$'", state, currentExpressions) :
      drillingInfoView.renderValuesList(drillingInfoView.templates[feature].values, currentExpressions);      
      
      $(elements.drillingInfo.values_container).on('click', `li.${CSS.modal.list_item}`, (e) => {
        
        const $this = e.currentTarget;

        $($this).toggleClass('active-filter');

        drillingInfoView.transferItem($($this));
        
      });

      $(elements.drillingInfo.op_search).on('keyup', (e) => {
        
        widget.getSearchInput($(e.currentTarget), feature);

      });

      $(elements.modal.apply_btn).on('click', (e) => {

        e.preventDefault();

        const selectedOptions: string[] = [];

        $('.active-filter').each((key, value) => {

          selectedOptions.push($(value).text().trim());

        });

        widget.applyFilter({
          name: feature,
          definitionQuery: widget.generateDefinitionQuery(drillingInfoView.templates[feature].op_field, selectedOptions),
          map: appMap
        });

      });

      $(elements.modal.ok_btn).on('click', (e) => {

        $(elements.modal.apply_btn).trigger('click');

        modal.removeModal();

      });

      $(elements.modal.cancel_btn).on('click', (e) => {

        modal.removeModal();
        
      });

    });
  };

  /*
   * Third Party Controller 
   */  
  const controlThirdParty = () => {

    const widget = state.currentWidget;
    const appMap = app.applicationMap.map;

    let feature: string = $('.active-feature').text().trim();

    widget.addCurrentLayersToList(appMap, feature);

    // Third Party Events

    /*
    $(elements.panel_obj.tab).on('click', (e) => {

      const $this = $(e.currentTarget);

      
      feature = $this.text();
      if (!thirdPartyView.isActive($this)) {

        thirdPartyView.toggleCurrentActive();
        thirdPartyView.toggleActiveFeature($this);
        thirdPartyView.renderFeatureMarkup(feature);

      } else {

        thirdPartyView.toggleActiveFeature($this);
        thirdPartyView.removeFeatureMarkup();
      
      }
      

    });
    */

    $(elements.thirdParty.add_btn).on('click', (e) => {

      e.preventDefault();

      const featureClass = $(elements.thirdParty.dropdown).val() as string;

      widget.addFeature(appMap, featureClass);

      thirdPartyView.renderListItem(featureClass);

    });

    $(elements.thirdParty.list).on('click', `li.${CSS.thirdParty.list_item}`, (e) => {

      e.stopImmediatePropagation();

      thirdPartyView.renderFeatureOptions($(e.currentTarget));

    });

    $(elements.thirdParty.list).on('click', `img#${CSS.thirdParty.remove_img}`, (e) => {

      e.stopImmediatePropagation();

      const featureName = $(e.currentTarget).parent().parent().text().trim();

      widget.removeFeature(appMap, featureName);

    });

    $(elements.thirdParty.list).on('click', `img#${CSS.thirdParty.filter_img}`, (e) => {

      const modal = new Modal();

      const featureName = $(e.currentTarget).parent().parent().text().trim();

      let currentExpressions = widget.getCurrentDefinitionQuery(appMap, featureName);

      thirdPartyView.renderFilterPanel(featureName);

      (!thirdPartyView.templates.op_values[featureName]) ? widget.queryLayer(appMap, featureName, currentExpressions) :
      thirdPartyView.renderValuesList(thirdPartyView.templates.op_values[featureName], currentExpressions);

      $(elements.thirdParty.values_container).on('click', `li.${CSS.modal.list_item}`, (e) => {
        
        const $this = e.currentTarget;

        $($this).toggleClass('active-filter');

        thirdPartyView.transferItem($($this));

      });

      $(elements.modal.apply_btn).on('click', (e) => {

        e.preventDefault();
  
        const selectedOptions: string[] = [];
  
        $('.active-filter').each((key, value) => {
  
          selectedOptions.push($(value).text().trim());
  
        });

        widget.applyFilter(
          appMap,
          featureName,
          widget.generateDefinitionQuery(selectedOptions)
        );
        
      });

      $(elements.modal.ok_btn).on('click', (e) => {

        $(elements.modal.apply_btn).trigger('click');

        modal.removeModal();

      });

      $(elements.thirdParty.op_search).on('keyup', (e) => {
        
        widget.getSearchInput($(e.currentTarget), featureName);

      });

    });



  };

  /*
   * Symbology Controller 
   */
  const controlSymbology = () => {

    const widget = state.currentWidget;
    const appMap = app.applicationMap.map;
    const layerNames = widget.getMapLayers(appMap);

    $(elements.symbology.list).on('click', `li.${CSS.symbology.list_item}`, (e) => {
    
      const $this = e.currentTarget;

      const name = $($this).text().trim();
      const modal = new Modal();
      
      let info = widget.getLayerInfo(appMap, name);

      $(elements.modal.panel).on('click', 'li.modal__list-item', (e) => {

        symbologyView.setRendererProps(info);

        symbologyView.toggleCurrentActive();

        $(e.currentTarget).toggleClass('active-filter');

        symbologyView.setElementValues($(e.currentTarget).text().trim(), info);

      });

      $(elements.modal.apply_btn).on('click', (e) => {

        e.preventDefault();

        symbologyView.setRendererProps(info);

        widget.setRenderer(appMap, name, info);

      });

      $(elements.modal.ok_btn).on('click', (e) => {

        e.preventDefault();

        $(elements.modal.apply_btn).trigger('click');

        modal.removeModal();

      });

      $(elements.modal.cancel_btn).on('click', (e) => {

        modal.removeModal();
        
      });

      $(elements.modal.panel).on('input', `input.${CSS.symbology.slider}`, (e) => {

        symbologyView.updateColorDisplay($(elements.symbology.current_color_display));
        
      });

    });
    
  };

  /*
   * Measure Controller 
   */
  const controlMeasure = () => {

    const appView = app.applicationMap.view;
    const widget = state.currentWidget;

    let type = $('.active-feature').text().trim().toLowerCase();

    // Measure Events
    $(elements.panel_obj.tab).on('click', (e) => {

      const $this = $(e.currentTarget);

      type = $this.text().trim().toLowerCase();

      if (!measureView.isActive($this)) {

        measureView.toggleCurrentActive();
        measureView.toggleActiveFeature($this);
        measureView.renderMeasurementTypeOptions(type);

      } else {

        measureView.toggleActiveFeature($this);
        measureView.removeTypeMarkup();
      
      }
      
    });

    $(elements.measure.go_btn).on('click', (e) => {

      e.preventDefault();

      const $this = $(e.currentTarget);

      $this.toggleClass('is_measuring');

      measureView.toggleIsMeasuringImg($this);
      

    });

  };

  /*
  * Launch Perpetual Widgets
  */
  controlCoordinates();

};

appController();