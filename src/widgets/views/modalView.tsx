import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const renderModal = (): void => {
    const markup = 
        `<div id=${CSS.modal.base}></div>
        <div id=${CSS.modal.panel}>
            <div class=${CSS.modal.close}></div>
        <div class=${CSS.modal.btn_container}>
            <button id=${CSS.modal.cancel_btn} class="${CSS.modal.button} ${CSS.button}">Cancel</button>
            <button id=${CSS.modal.apply_btn} class="${CSS.modal.button} ${CSS.button}">Apply</button>
            <button id=${CSS.modal.ok_btn} class="${CSS.modal.button} ${CSS.button}">OK</button>
        </div>
        </div>`;

    $(markup).insertBefore(elements.controller);

    addEvents();
};

export const removeModal = (): void => {

    $(elements.modal.base).remove();
    $(elements.modal.panel).remove();
    
};

export const addEvents = () => {

    $(elements.modal.cancel_btn).on('click', (e) => {

        removeModal();
        
    });

};