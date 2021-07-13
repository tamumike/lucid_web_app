import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const renderWidget = (): void => {
    
    const markup = 

    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>Acreage</p>
        <div class=${CSS.panel_obj.divider}></div>
        <p class=${CSS.panel_obj.heading}>Select Operator</p>
        <select id=${CSS.acreage.dropdown} class=${CSS.dropdown}></select>
        <div class=${CSS.panel_obj.subcontainer}>
            <button id=${CSS.acreage.add} class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.add_img} />Add</button>
        </div>
        <div class=${CSS.panel_obj.subcontainer}>
            <ul id=${CSS.acreage.list} class=${CSS.panel_obj.unordered_list}>
            </ul>
        </div>
        <button id=${CSS.acreage.removeAll} class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.remove_img} />Remove All</button>
    </div>`;

    $(elements.panel).append(markup);
};

export const renderListItem = (text: string): void => {

    let exists: boolean = false;

    let listElements = ($(`li.${CSS.acreage.list_item}`));

    listElements.each((index, element) => {
        
        if (element.textContent == text) {
            exists = true;
        }

    });
    
    if (!exists) {
        const markup = 
            `<li class=${CSS.acreage.list_item}>${text}</li>`;
    
        $(elements.acreage.list).append(markup);
    }
    
};

export const removeListItem = (text: string): void => {

    let listElements = ($(`li.${CSS.acreage.list_item}`));
    
    listElements.each((index, element) => {

        if (element.innerText.trim() === text.trim()) {

            listElements[index].remove();

        }

    });
    
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
            <select id=${CSS.modal.dropdown} class=${CSS.dropdown}>
                <option value="dedication">Dedication</option>
            </select>
            <div id=${CSS.acreage.action_container}>
                <ul id=${CSS.acreage.filter_list} class=${CSS.modal.options_list}>
            </div>
            </ul>
        </div>`;

    $(elements.modal.panel).append(markup);

};

export const toggleActiveFilters = (values: string[]) => {

    values.forEach((value) => {
        
        let list = $(`${elements.modal.options_list} > li${elements.modal.list_item}`);

        list.each((index, element) => {
            
            if ($(element).text() === value) $(element).toggleClass('active-filter');
            
            
        });

    });
    
    
};

export const populateSelect = (acreageProducers: string[]) => {
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
        `<li class=${CSS.modal.list_item}>${value}</li>`;
    
        $(elements.acreage.filter_list).append(markup);
    });

};