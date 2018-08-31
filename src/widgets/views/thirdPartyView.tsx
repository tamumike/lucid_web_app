import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const templates = {
    "Pipelines": {
        dropdown_opts: ["Natural Gas", "Crude", "NGL", "Refined Products"]
    },
    "Facilities": {
        dropdown_opts: ["Compresors", "Meters", "Processing Plants"]
    }
};

export const renderWidget = (): void => {

    const markup = 
        `<div class=${CSS.panel_obj.container}>
            <p class=${CSS.panel_obj.title}>3rd Party Data</p>
            <div id=${CSS.panel_obj.tab_container} class=${CSS.panel_obj.subcontainer}>
                <ul id=${CSS.panel_obj.tab_list}>
                    <li class="${CSS.panel_obj.tab} active-feature">Pipelines</li>
                    <li class=${CSS.panel_obj.tab}>Facilities</li>
                </ul>
            </div>
            <button id=${CSS.thirdParty.add_btn} class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.add_img} />Add</button>
            <div class=${CSS.panel_obj.subcontainer}>
                <ul id=${CSS.thirdParty.list} class=${CSS.panel_obj.unordered_list}>
                </ul>
            </div>
        </div>`;

    $(elements.panel).append(markup);
    renderFeatureMarkup("Pipelines")
};

export const renderFeatureMarkup = (name: string): void => {

    removeFeatureMarkup();

    const markup = 
        `<div id=${CSS.thirdParty.action_container} class=${CSS.panel_obj.subcontainer}>
            <p class=${CSS.panel_obj.heading}>${name}</p>
            <select id=${CSS.thirdParty.dropdown} class=${CSS.dropdown}>${populateDropdownOptions(name)}</select>
        </div>`;

    $(markup).insertAfter($(elements.panel_obj.tab_container));

    populateDropdownOptions(name);

};

const populateDropdownOptions = (name: string): string => {

    let options: string = '';

    templates[name].dropdown_opts.forEach((option: string) => {
        
        options += `<option>${option}</option>`;
        
    });

    return options;
    
};

export const isActive = (element: JQuery): boolean => {

    return element.hasClass('active-feature');

};

export const toggleCurrentActive = (): void => {

    let currentActive = $(".active-feature");

    currentActive.each(index => {

        $(currentActive[index]).toggleClass("active-feature");

    });

};

export const toggleActiveFeature = (element: JQuery): void => {

    element.toggleClass('active-feature');

};

export const removeFeatureMarkup = (): void => {

    $(elements.thirdParty.action_container).remove();

};

export const renderListItem = (name: string): void => {

    if ($(`li.${CSS.thirdParty.list_item}:contains(${name})`).length === 0) {

        const markup = 
        `<li class=${CSS.thirdParty.list_item}>${name}</li>`;
    
        $(elements.thirdParty.list).append(markup);
    }
    
};

export const removeListItem = (name: string): void => {

    $(`${elements.thirdParty.list_item}:contains(${name})`).remove();

};

export const renderFeatureOptions = (element: JQuery): void => {

    const markup = 
    `<div class=${CSS.thirdParty.options}>
        <img id=${CSS.thirdParty.filter_img} class=${CSS.thirdParty.options_img} title="Filter" />
        <img id=${CSS.thirdParty.remove_img} class=${CSS.thirdParty.options_img} title="Remove" />
    </div>`;
    
    if (!hasOptions(element)) {

        element.append(markup);

        removeExistingOptions(element);

    } else {

        element.children().remove();

    }

};

const hasOptions = (element: JQuery): boolean => {
    
    return (element.children().length > 0) ? true : false;

};

const removeExistingOptions = (element: JQuery): void => {

    let existingOptions = $(`${elements.thirdParty.options}`);
    
    existingOptions.each((index) => {

        if (!$(existingOptions[index]).parent().is(element)) {

            $(existingOptions[index]).remove();

        }

    });

};

export const renderFilterPanel = (name: string): void => {

    const markup = 
        `<div class=${CSS.modal.subcontainer}>
            <p class=${CSS.modal.title}>${name}</p>
            <select id=${CSS.thirdParty.field_select} class=${CSS.dropdown}></select>
            <div class=${CSS.thirdParty.values_container}>
                <ul id=${CSS.thirdParty.avail_opts} class=${CSS.modal.options_list}>
                </ul>
            </div>
            <div class=${CSS.thirdParty.values_container}>
                <ul id=${CSS.thirdParty.selected_opts} class=${CSS.modal.options_list}>
                </ul>
            </div>
            <div class=${CSS.modal.btn_container}>
                <button id=${CSS.modal.cancel_btn} class="${CSS.modal.button} ${CSS.button}">Cancel</button>
                <button id=${CSS.modal.apply_btn} class="${CSS.modal.button} ${CSS.button}">Apply</button>
                <button id=${CSS.modal.ok_btn} class="${CSS.modal.button} ${CSS.button}">OK</button>
            </div>
            <img class=${CSS.search_img} />
            <input placeholder="Search..." type="text" id=${CSS.thirdParty.op_search} class=${CSS.textbox}></input>
        </div>`;

        $(elements.modal.panel).append(markup);

};