import $ = require("jquery");

import {CSS, elements, acreageProducers} from "../views/base";


export const renderWidget = (): void => {

    const markup = 

    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>Acreage</p>
        <p class=${CSS.panel_obj.heading}>Add Acreage</p>
        <select id=${CSS.acreage.dropdown} class=${CSS.dropdown}></select>
        <div class=${CSS.panel_obj.subcontainer}>
            <button id=${CSS.acreage.add} class=${CSS.panel_obj.button}>Add</button>
        </div>
        <div class=${CSS.panel_obj.subcontainer}>
            <ul id=${CSS.acreage.list} class=${CSS.panel_obj.unordered_list}>
            </ul>
        </div>
        <button id=${CSS.acreage.removeAll} class=${CSS.panel_obj.button}>Remove All</button>
    </div>`;

    $(elements.panel).append(markup);
};

export const renderListItem = (text: string): void => {

    const markup = 
    `<li class=${CSS.acreage.list_item}>${text}</li>`;

    $(elements.acreage.list).append(markup);
    
};

export const removeListItem = (text: string): void => {

    $(`${elements.acreage.list} li:contains(${text})`).remove();
    
};

export const renderFeatureOptions = (element: JQuery): void => {

    const markup = 
    `<div class=${CSS.acreage.options}>
        <img id=${CSS.acreage.filter_img} class=${CSS.acreage.options_img} title="Filter" />
        <img id=${CSS.acreage.remove_img} class=${CSS.acreage.options_img} title="Remove" />
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

    let existingOptions = $(`${elements.acreage.options}`);
    
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
            <p class=${CSS.modal.heading}>Add Filter: </p>
            <select class=${CSS.dropdown}>
                <option value="dedication">Dedication</option>
            </select>
            <ul id=${CSS.acreage.filter_list} class=${CSS.modal.options_list}>
            </ul>
            <div class=${CSS.modal.btn_container}>
                <button id=${CSS.modal.cancel_btn} class=${CSS.modal.button}>Cancel</button>
                <button id=${CSS.modal.apply_btn} class=${CSS.modal.button}>Apply</button>
                <button id=${CSS.modal.ok_btn} class=${CSS.modal.button}>OK</button>
            </div>
        </div>`;

    $(elements.modal.panel).append(markup);

};

export const toggleActiveFilters = (values: string[]) => {

    values.forEach((value) => {
        let list = $(`${elements.modal.options_list} > li${elements.acreage.list_item}`);

        list.each((index, element) => {
            
            if ($(element).text() === value) $(element).toggleClass('active-filter');
            
            
        });
    });
    
    
};

export const populateSelect = () => {
    acreageProducers.forEach(producer => {

        $(elements.acreage.dropdown).append(`<option>${producer}</option>`);

    });
};

export const populateFieldValues = (features: any) => {
    
    let uniqueValues: string[] = [];

    features.forEach((feature: {attributes: {Dedication: string}}) => {

        let value = feature.attributes.Dedication;
        
        if (uniqueValues.indexOf(value) === -1) uniqueValues.push(value);

    });

    renderFieldValuesList(uniqueValues);
    
};

const renderFieldValuesList = (values: string[]) => {

    values.forEach((value: string) => {
        const markup = 
        `<li class=${CSS.acreage.list_item}>${value}</li>`;
    
        $(elements.acreage.filter_list).append(markup);
    });

};