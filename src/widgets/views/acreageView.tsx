import $ = require("jquery");

import {CSS, elements, acreageProducers} from "../views/base";


export const renderWidget = (): void => {

    const markup = 

    `<div class=${CSS.container}>
        <p class=${CSS.title}>Acreage</p>
        <p class=${CSS.heading}>Add Acreage</p>
        <select id=${CSS.acreage.dropdown} class=${CSS.dropdown}></select>
        <div class=${CSS.subcontainer}>
            <button id=${CSS.acreage.add} class=${CSS.button}>Add</button>
            <button id=${CSS.acreage.remove} class=${CSS.button}>Remove</button>
        </div>
        <div class=${CSS.subcontainer}>
            <ul id=${CSS.acreage.list} class=${CSS.unordered_list}>
            </ul>
        </div>
        <button id=${CSS.acreage.removeAll} class=${CSS.button}>Remove All</button>
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
        <img class=${CSS.acreage.options_img} title="Filter" />
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
            <select class=${CSS.modal.dropdown}>
                <option value="dedication">Dedication</option>
            </select>
            <ul id=${CSS.acreage.filter_list} class=${CSS.modal.options_list}>
            </ul>
        </div>`;

    $(elements.modal.panel).append(markup);

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