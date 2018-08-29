import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const renderWidget = (): void => {

    const markup = 

    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>3rd Party</p>
        <p class=${CSS.panel_obj.heading}>Add Data</p>
        <button class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.add_img} />Add</button>
        <button class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.remove_img} />Remove</button>
        <button class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.search_img} />Search By Operator</button>
    </div>`;

    $(elements.panel).append(markup);
};