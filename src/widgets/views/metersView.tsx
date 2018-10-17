import $ = require('jquery');

import {CSS, elements} from "./base";

export const fields: string[] = ['Producer'];

export let attributes = {
    'Producer': []
};

export const renderWidget = (): void => {

    const markup = `
        <div class=${CSS.panel_obj.container}>
            <p class=${CSS.panel_obj.title}>Meters</p>
            <div class=${CSS.panel_obj.divider}></div>
            <p class=${CSS.panel_obj.heading}>Filter By Attributes</p>
            <button id=${CSS.meters.filter_btn} class=${CSS.button}>Filter</button>
            <p class=${CSS.panel_obj.heading}>Visualize</p>
            <button id=${CSS.meters.visualize_btn} class=${CSS.button}>Visualize</button>
        </div>`;

    $(elements.panel).append(markup);

};

export const renderFilterPanel = (currentExpressions: string[]): void => {

    const markup = `
        <div class=${CSS.modal.subcontainer}>
            <p class=${CSS.modal.title}>Filter Meters By Attributes</p>
            <select id=${CSS.meters.fields_dropdown} class=${CSS.dropdown}>
                ${populateSelectWithFields()}
            </select>
            <div class=${CSS.meters.values_container}>
                <ul id=${CSS.meters.avail_opts} class=${CSS.modal.options_list}>
                </ul>
            </div>
            <div class=${CSS.meters.values_container}>
                <ul id=${CSS.meters.selected_opts} class=${CSS.modal.options_list}>
                </ul>
            </div>
            <img class=${CSS.search_img} />
            <input placeholder="Search..." type="text" id=${CSS.meters.value_search} class=${CSS.textbox}></input>
        </div>`;

        $(elements.modal.panel).append(markup);

        populateAvailableOptionsList(currentExpressions);

};

const populateSelectWithFields = (): string => {

    let markup: string = ``;

    fields.forEach(field => {

        markup += `<option>${field}</option>`

    });

    return markup;

};

export const populateAvailableOptionsList = (currentExpressions: string[]): void => {

    $(elements.meters.avail_opts).empty();

    $(elements.meters.avail_opts).parent().scrollTop();

    const field = $(elements.meters.fields_dropdown).val() as string;
    
    attributes[field].forEach(value => {

        if (currentExpressions.indexOf(value) === -1) {

            $(elements.meters.avail_opts).append(`<li class=${CSS.modal.list_item}>${value}</li>`);

        } else {

            $(elements.meters.selected_opts).append(`<li class="${CSS.modal.list_item} active-filter">${value}</li>`);

        }

    });

};

export const scrollOptionsDiv = (value: string): void => {

    const $parent = $(elements.meters.avail_opts).parent();
    const element = $(`${elements.meters.avail_opts} > li:contains(${value})`);

    if (element.length > 0) {
        
        $parent.scrollTop(($parent.scrollTop() as number) + (element.position().top as number));
    }

};

export const transferItem = (element: JQuery): void => {

    const itemContents: string[] =[];

    if (element.hasClass('active-filter')) {

        element.detach().appendTo($(elements.meters.selected_opts));

    } else {

        element.detach();

        $(elements.meters.avail_opts).children('li').each((key, value) => {

            itemContents.push($(value).text());
            
        });
    
        itemContents.push(element.text());
        itemContents.sort();

        let neighbor: string = itemContents[itemContents.indexOf(element.text())+1];

        (neighbor) ? element.insertBefore($(`.${CSS.modal.list_item}:contains(${neighbor})`)) :
        element.appendTo(elements.meters.avail_opts);
        
    }
    
};
