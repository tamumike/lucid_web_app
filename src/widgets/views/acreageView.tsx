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

const addListItemEvent = (): void => {

    $(elements.list_item).on('click', (e) => {

        e.stopImmediatePropagation();

        renderFeatureOptions($(e.currentTarget));

      });

};

export const renderListItem = (text: string): void => {

    const markup = 
    `<li class=${CSS.list_item}>${text}</li>`;

    $(elements.acreage.list).append(markup);

    addListItemEvent();
    
};

export const removeListItem = (text: string): void => {

    $(`${elements.acreage.list} li:contains(${text})`).remove();
    
};

const renderFeatureOptions = (element: JQuery): void => {

    const markup = 
    `<div class=${CSS.acreage.options}>
        Options
    </div>`;

    if ($(`.${CSS.acreage.options}`).length !== 0) {
        $(`.${CSS.acreage.options}`).remove();
    }
    

    if (!element.next().hasClass(CSS.acreage.options)) {

        $(markup).insertAfter(element);

    }

};