import $ = require("jquery");

import {CSS, elements} from "../views/base";

const templates = {
    wells: {
        markup:
        `<div class=${CSS.panel_obj.subcontainer}>
            <p class=${CSS.panel_obj.heading}></p>
        </div>`,
        op_field: "operator_alias"
    },
    production: {
        markup: ``,
        op_field: "current_operator"
    },
    rigs: {
        markup: ``,
        op_field: "operator_name"
    },
    permits: {
        markup: ``,
        op_field: "operator_alias"
    }
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
        <button id=${CSS.drillingInfo.add_btn} class=${CSS.panel_obj.button}>Add</button>
        <button id=${CSS.drillingInfo.remove_btn} class=${CSS.panel_obj.button}>Remove</button>
        <button id=${CSS.drillingInfo.search_btn} class=${CSS.panel_obj.button}>Search By Operator</button>`;

    $(elements.drillingInfo.action_container).append(markup);
    
};

export const renderSearchPanel = (name: string): void => {

    const markup = 
        `<div class=${CSS.modal.subcontainer}>
            <p class=${CSS.modal.title}>${name}</p>
            <div class=${CSS.drillingInfo.values_container}>
                <ul id=${CSS.drillingInfo.avail_opts} class=${CSS.modal.options_list}>
                </ul>
            </div>
            <div class=${CSS.drillingInfo.values_container}>
                <ul id=${CSS.drillingInfo.selected_opts} class=${CSS.modal.options_list}>
                </ul>
            </div>
            <div class=${CSS.modal.btn_container}>
                <button id=${CSS.modal.cancel_btn} class=${CSS.modal.button}>Cancel</button>
                <button id=${CSS.modal.apply_btn} class=${CSS.modal.button}>Apply</button>
                <button id=${CSS.modal.ok_btn} class=${CSS.modal.button}>OK</button>
            </div>
        </div>`;

    $(elements.modal.panel).append(markup);

};

export const getFieldName = (name: string): string => {

    let field: string;

    (name === 'Rigs') ? field = templates.rigs.op_field : 
    (name === 'Wells') ? field = templates.wells.op_field :
    (name === 'Production') ? field = templates.production.op_field : 
    field = templates.permits.op_field;

    return field;

}

export const getValuesList = (results: any, name: string): void => {
    
    let field: string = getFieldName(name);
    const values: string[] = [];


    results.forEach((feature) => {

        if (values.indexOf(feature.attributes[field]) === -1) values.push(feature.attributes[field]);
        
    });

    renderValuesList(values.sort());
    
};

const renderValuesList = (values: string[]): void => {

    values.forEach((value) => {

        const markup = `<li class=${CSS.modal.list_item}>${value}</li>`;

        $(elements.drillingInfo.avail_opts).append(markup);

    });
    

};

export const toggleActiveFilters = (values: string[]): void => {

    values.forEach((value) => {

        let list = $(`${elements.drillingInfo.avail_opts} > li${elements.modal.list_item}`);

        console.log(value);
        

        list.each((index, element) => {
            
            if ($(element).text() === value) 
                $(element).toggleClass('active-filter')
                    .detach()
                    .appendTo(elements.drillingInfo.selected_opts);
            
        });

    });

};

export const transferItem = (element: JQuery): void => {

    const itemContents: string[] =[];

    if (element.hasClass('active-filter')) {

        element.detach().appendTo($(elements.drillingInfo.selected_opts));

    } else {

        element.detach();

        $(elements.drillingInfo.avail_opts).children('li').each((key, value) => {

            itemContents.push($(value).text());
            
        });
    
        itemContents.push(element.text());
        itemContents.sort();

        let neighbor: string = itemContents[itemContents.indexOf(element.text())+1];

        (neighbor) ? element.insertBefore($(`.${CSS.modal.list_item}:contains(${neighbor})`)) :
        element.appendTo(elements.drillingInfo.avail_opts);
        
    }


    

};