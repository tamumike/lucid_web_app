import $ = require("jquery");

import {CSS, elements} from "../views/base";

export let templates = {
    "Wells": {
        markup:
        `<div class=${CSS.panel_obj.subcontainer}>
            <p class=${CSS.panel_obj.heading}></p>
        </div>`,
        op_field: "operator_alias"
    },
    "Production": {
        markup: ``,
        op_field: "current_operator"
    },
    "Rigs": {
        markup: ``,
        op_field: "operator_name"
    },
    "Permits": {
        markup: ``,
        op_field: "operator_alias"
    }
};

export const renderWidget = (): void => {

    const markup = 

    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>Drilling Info</p>
        <div id=${CSS.panel_obj.tab_container} class=${CSS.panel_obj.subcontainer}>
            <ul id=${CSS.panel_obj.tab_list}>
                <li class="${CSS.panel_obj.tab} active-feature">Rigs</li>
                <li class=${CSS.panel_obj.tab}>Production</li>
                <li class=${CSS.panel_obj.tab}>Wells</li>
                <li class=${CSS.panel_obj.tab}>Permits</li>
            </ul>
        </div>
        <div id=${CSS.drillingInfo.action_container} class=${CSS.panel_obj.subcontainer}>
        </div>
    </div>`;

    $(elements.panel).append(markup);
    renderFeatureMarkup("Rigs");
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
        <button id=${CSS.drillingInfo.add_btn} class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.add_img} />Add</button>
        <button id=${CSS.drillingInfo.remove_btn} class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.remove_img} />Remove</button>
        <br>
        <button id=${CSS.drillingInfo.search_btn} class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.search_img} />Search By Operator</button>`;

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
            <img class=${CSS.search_img} />
            <input placeholder="Search..." type="text" id=${CSS.drillingInfo.op_search} class=${CSS.textbox}></input>
        </div>`;

    $(elements.modal.panel).append(markup);

};

export const renderValuesList = (values: string[], currentExpressions: string[]): void => {

    values.forEach((value) => {

        const markup = `<li class=${CSS.modal.list_item}>${value}</li>`;

        if (currentExpressions.indexOf(value) === -1) $(elements.drillingInfo.avail_opts).append(markup);

    });

    toggleActiveFilters(currentExpressions);

};

export const toggleActiveFilters = (values: string[]): void => {
    
    values.forEach((value) => {

        const markup = $(`<li class="${CSS.modal.list_item} active-filter">${value}</li>`);
        $(elements.drillingInfo.selected_opts).append(markup);

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

export const scrollOptionsDiv = (value: string): void => {

    const $parent = $(elements.drillingInfo.avail_opts).parent();
    const element = $(`${elements.drillingInfo.avail_opts} > li:contains(${value})`);

    if (element.length > 0) {
        
        $parent.scrollTop(($parent.scrollTop() as number) + (element.position().top as number) - 
        ($parent.height() as number)/2 + (element.height() as number)/2);
    }

};