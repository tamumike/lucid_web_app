import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const excludeNames: string[] = ["System"];

export const renderWidget = (): void => {

    const markup = 
    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>Symbology</p>
        <div class=${CSS.panel_obj.divider}></div>
        <p class=${CSS.panel_obj.heading}>Select Layer</p>
        <div class=${CSS.panel_obj.divider2}></div>
        <ul id=${CSS.symbology.list} class=${CSS.panel_obj.unordered_list}>
            <li class="${CSS.panel_obj.list_item} placeholder">No Current Layers</li>
        </ul>
    </div>`;

    $(elements.panel).append(markup);

};

export const renderListItem = (names: string[]): void => {

    if (names.length > 0) $(`li.placeholder`).remove();
    
    names.forEach((name) => {
        
        const markup = `<li class=${CSS.symbology.list_item}>${name}</li>`;

        $(elements.symbology.list).append(markup);
        
    });

};

export const renderSymbologyPanel = (name: string, info: any): void => {

    const markup = 
        `<div class=${CSS.modal.subcontainer}>
            <p class=${CSS.modal.heading}>${name}</p>
            <div class=${CSS.symbology.values_container}>
                <ul id=${CSS.symbology.avail_opts} class=${CSS.modal.options_list}>
                    ${renderValuesList(name, info.definitionExpression)}
                </ul>
            </div>
            <div id=${CSS.symbology.render_container} class=${CSS.symbology.values_container}>
                <label class=${CSS.symbology.label} for=${CSS.symbology.opacity_input}>Opacity</label>
                <input type="text" size="2" maxLength="2" id=${CSS.symbology.opacity_input} />
                <div id=${CSS.symbology.slider_container}>
                    <input type="range" class=${CSS.symbology.slider} min="0" max="255" />
                    <input type="range" class=${CSS.symbology.slider} min="0" max="255" />
                    <input type="range" class=${CSS.symbology.slider} min="0" max="255" />
                </div>
                <div id=${CSS.symbology.color_display}>
                </div>
            </div>
            <div class=${CSS.modal.btn_container}>
                <button id=${CSS.modal.cancel_btn} class="${CSS.modal.button} ${CSS.button}">Cancel</button>
                <button id=${CSS.modal.apply_btn} class="${CSS.modal.button} ${CSS.button}">Apply</button>
                <button id=${CSS.modal.ok_btn} class="${CSS.modal.button} ${CSS.button}">OK</button>
            </div>
        </div>`;

    $(elements.modal.panel).append(markup);

};

const renderValuesList = (name: string, values: string[]): string => {

    let markup: string = '';

    if (values) {

        values.forEach((value) => {

            markup += `<li class=${CSS.modal.list_item}>${value}</li>`;
    
        });

    } else {

        markup += `<li class=${CSS.modal.list_item}>${name}</li>`;

    }

    return markup;

};