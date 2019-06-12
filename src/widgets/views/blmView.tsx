import $ = require('jquery');

import {CSS, elements} from "./base";

export const renderWidget = () => {

    const markup = 
        `<div class=${CSS.panel_obj.container}>
            <p class=${CSS.panel_obj.title}>BLM Wildlife Data</p>
            <div class=${CSS.panel_obj.divider}></div>
            <p class=${CSS.panel_obj.heading}>Toggle Layer Visibility</p>
            <button id=${CSS.blm.visibility_btn} class="${CSS.panel_obj.button} ${CSS.button}">Show BLM Layer</button>
            <div id=${CSS.layers.action_container} class=${CSS.panel_obj.subcontainer}>
                <ul id=${CSS.layers.list} class=${CSS.panel_obj.unordered_list}>
                </ul>
            </div>
        </div>`;

    $(elements.panel).append(markup);

};

export const populateLayersList = (visible: string[], notVisible: string[]): void => {

    visible.forEach((layer) => {
        
        $(elements.layers.list).append(`<li class=${CSS.panel_obj.list_item}>${layer}</li>`);

    });

    notVisible.forEach((layer) => {
        
        $(elements.layers.list).append(`<li class="${CSS.panel_obj.list_item} placeholder">${layer}</li>`);

    });

};