import $ = require("jquery");

import {CSS, elements} from "../views/base";

const templates = {
    "area": {
        units: ["Acres"]
    },
    "length": {
        units: ["Feet (US)", "Miles"]
    }
};

export const renderWidget = () => {

    const markup = 
    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>Measure</p>
        <div id=${CSS.panel_obj.tab_container} class=${CSS.panel_obj.subcontainer}>
            <ul id=${CSS.panel_obj.tab_list}>
                <li class="${CSS.panel_obj.tab} active-feature">Area</li>
                <li class=${CSS.panel_obj.tab}>Length</li>
            </ul>
        </div>
    </div>`;

    $(elements.panel).append(markup);

    const type = $('.active-feature').text().trim().toLowerCase();
    renderMeasurementTypeOptions(type);

};

export const renderMeasurementTypeOptions = (type: string) => {

    removeTypeMarkup();

    const markup = 
    `<div id=${CSS.measure.action_container} class=${CSS.panel_obj.subcontainer}>
        <label for="unitSelect">Units: </label>
        <select name="unitSelect" class=${CSS.dropdown}>${populateSelect(type)}</select>
        <button id=${CSS.measure.go_btn} class=${CSS.button}><img class=>Start</button>
    </div>`;

    $(markup).insertAfter($(elements.panel_obj.tab_container));

};

const populateSelect = (type: string): string => {

    let markup: string = ``;

    templates[type].units.forEach((unit) => {
        markup += `<option>${unit}</option>`;
    });

    return markup;
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

export const toggleActiveFeature = (element: JQuery): void => {

    element.toggleClass("active-feature");

};

export const removeTypeMarkup = (): void => {

    $(elements.measure.action_container).empty();

};

export const toggleIsMeasuringImg = (element: JQuery): void => {

    (element.hasClass('is_measuring')) ? element.html(`<img class=${CSS.measure.is_measuring_img} />`) : element.text('Start');

};