import $ = require("jquery");

import {CSS, elements} from "../views/base";

const templates: {} = {
    wells: 
    `<div class=${CSS.panel_obj.subcontainer}>
        <p class=${CSS.panel_obj.heading}></p>
    </div>`,
    production: ``,
    rigs: ``,
    permits: ``
};

export const renderWidget = (): void => {

    const markup = 

    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>Drilling Info</p>
        <div id=${CSS.drillingInfo.tab_container} class=${CSS.panel_obj.subcontainer}>
            <ul id=${CSS.drillingInfo.tab_list}>
                <li class=${CSS.drillingInfo.tab}>Rigs</li>
                <li class=${CSS.drillingInfo.tab}>Production</li>
                <li class=${CSS.drillingInfo.tab}>Wells</li>
                <li class=${CSS.drillingInfo.tab}>Permits</li>
            </ul>
        </div>
        <div id=${CSS.drillingInfo.action_container} class=${CSS.panel_obj.subcontainer}>
        </div>
    </div>`;

    $(elements.panel).append(markup);
};

export const toggleActiveFeature = (element: JQuery): void => {

    element.toggleClass("active-feature");

};

export const isActive = (element: JQuery): boolean => {

    return element.hasClass("active-feature");

};

export const toggleCurrentActive = (): void => {

    let currentActive = $(".active-feature");

    currentActive.each(index => {

        $(currentActive[index]).toggleClass("active-feature");

    });

};

export const removeFeatureMarkup = (): void => {

    $(elements.drillingInfo.action_container).empty();

};

export const renderFeatureMarkup = (feature: string): void => {

    removeFeatureMarkup();

    const markup: string = 
        `<p class=${CSS.panel_obj.heading}>${feature}</p>
        <button id=${CSS.drillingInfo.add_all_btn} class=${CSS.panel_obj.button}>Add All</button>
        <button id=${CSS.drillingInfo.search_btn} class=${CSS.panel_obj.button}>Search By Operator</button>`;

    $(elements.drillingInfo.action_container).append(markup);
    
};

export const renderSearchPanel = (name: string): void => {

    const markup = 
        `<div class=${CSS.modal.subcontainer}>
            <p class=${CSS.modal.title}>${name}</p>
            <div id=${CSS.drillingInfo.values_container}>
                <ul class=${CSS.modal.options_list}>
                </ul>
            </div>
        </div>`;

    $(elements.modal.panel).append(markup);

};