import "./config";
import $ = require("jquery");

import "@dojo/shim/Promise";

import App from "./widgets/models/App";
import Panel from "./widgets/models/Panel";
import Modal from "./widgets/models/Modal";
import Acreage from "./widgets/models/Acreage";
import Coordinates from "./widgets/models/Coordinates";
import DrillingInfo from "./widgets/models/DrillingInfo";

import * as panelView from "./widgets/views/panelView";
import * as widgetView from "./widgets/views/widgetView";
import * as acreageView from "./widgets/views/acreageView";
import * as drillingInfoView from "./widgets/views/drillingInfoView";

import {CSS, elements} from "./widgets/views/base";

const state: {[key: string]: any} = {};

export const appController = () => {

  const app = new App();  

  state.widgets = [new Acreage(), new Coordinates(), new DrillingInfo()];
  state.acreage = [];

  const launchWidget = (currentWidget: string): void => {
    
    (currentWidget == "acreage") ? controlAcreage() : 
    (currentWidget == "coords") ? controlCoordinates() : 
    (currentWidget == "drillInfo") ? controlDrillingInfo() : 
    console.log('no Widget');

  };
  

  /* 
  * Events 
  */
  $(".controller__widgets-container").on("click", (e) => {

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

      widget.queryLayer(featureName, "Shape.STArea() > 0", state, currentExpressions);      


      $(elements.modal.options_list).on('click', `li.${CSS.acreage.list_item}`, (e) => {
        
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
    console.log('coords');
    
  };

  /*
   * Drilling Info Controller 
   */
  const controlDrillingInfo = () => {
    const widget = state.currentWidget;
    const appMap = app.applicationMap.map;

    let feature: string;

    // Drilling Info Events
    $(elements.drillingInfo.tab).on('click', (e) => {
      
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

    $(elements.drillingInfo.action_container).on('click', `button#${CSS.drillingInfo.add_all_btn}`, (e) => {
      
      widget.addFeature(appMap, feature);
      
    });

    $(elements.drillingInfo.action_container).on('click', `button#${CSS.drillingInfo.search_btn}`, (e) => {

      const modal = new Modal();

      drillingInfoView.renderSearchPanel(feature);

      widget.queryLayer(feature, "Label <> '$$$'", state);

    });
  };

};



appController();