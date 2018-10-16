import $ = require('jquery');

import {CSS, elements} from "./base";

export const renderWidget = (): void => {

    const markup = `
        <div class=${CSS.panel_obj.container}>
            <p class=${CSS.panel_obj.title}>Meters</p>
            <div class=${CSS.panel_obj.divider}></div>
        </div>`;

    $(elements.panel).append(markup);

};