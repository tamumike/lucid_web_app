import "./config";
import $ = require("jquery");

import "@dojo/shim/Promise";

import App from "./widgets/models/App";
// import Widget from "./widgets/models/Widget";
import Panel from "./widgets/models/Panel";
import Acreage from "./widgets/models/Acreage";
import Coordinates from "./widgets/models/Coordinates";

import * as panelView from "./widgets/views/panelView";
import * as widgetView from "./widgets/views/widgetView";

import {elements} from "./widgets/views/base";

const state: {[key: string]: any} = {};

export const appController = () => {

  const app = new App();  

  state.widgets = [new Acreage(), new Coordinates()];
  state.acreage = [];

  const launchWidget = (currentWidget: string): void => {
    
    (currentWidget == "acreage") ? controlAcreage() : 
    (currentWidget == "coords") ? controlCoordinates() : 
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
      panelView.showPanel("acreage");
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
    widget.populateSelect();

    // Add current acreage layers to the list
    widget.addCurrentLayersToList(state);

    // Acreage Events
    $(elements.acreage.add_btn).on('click', () => {

      let producer = $(elements.acreage.dropdown).val();

      widget.addFeature(appMap, producer, state);

    });

    $(elements.acreage.remove_btn).on('click', () => {
      
      let producer = $(elements.acreage.dropdown).val();

      widget.removeFeature(appMap, producer, state);

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

};



appController();