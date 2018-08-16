import $ = require("jquery");

import {CSS, elements} from "../views/base";

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
    `<li class=${CSS.list_item}>${text}</li>`;

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
        </div>`;

    $(elements.modal.panel).append(markup);

};