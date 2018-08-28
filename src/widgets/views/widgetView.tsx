import $ = require("jquery");

import Widget from "../models/Widget";

export const renderNode = (label: string, widgetID: string) => {

    const CSS = {
        base: "controller__widget-container",
        nodeId: `controller__widget-${label}`,
        imageClass: `controller__widget-img-${label}`,
        labelClass: `controller__widget-label`
    };

    const markup = 
        `<div id=${CSS.nodeId} class=${CSS.base} widgetId=${widgetID}>
            <span class=${CSS.labelClass}>${label.replace('_', ' ').toUpperCase()}</span>
        </div>`;

    $("#controller__widgets").append(markup);
    
};

export const isActive = (element: JQuery): boolean => {
    return element.hasClass("active-widget");
};

export const toggleActive = (element: JQuery): void => {

    element.toggleClass("active-widget");

};

export const toggleCurrentActive = (): void => {
    let currentActive = $(".active-widget");

    currentActive.each(index => {
        $(currentActive[index]).toggleClass("active-widget");
    });
};

export const getWidget = (state:any, id: string | undefined): void => {
    state.widgets.forEach((widget: Widget) => {
        if (widget.ID == id) {
            state.currentWidget = widget;
        }
    });
};