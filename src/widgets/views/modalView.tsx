import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const renderModal = (): void => {
    const markup = 
        `<div id=${CSS.modal.base}></div>
        <div id=${CSS.modal.panel}>
            <div class=${CSS.modal.close}></div>
        </div>`;

    $(markup).insertBefore(elements.controller);
};

export const removeModal = (): void => {

    $(elements.modal.base).remove();
    $(elements.modal.panel).remove();
    
};