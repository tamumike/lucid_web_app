import $ = require("jquery");

import * as modalView from "../views/modalView";
import {elements} from "../views/base";

export default class Modal {

     constructor() {
        modalView.renderModal();
        this.addModalCloseEvent();
    }

    addModalCloseEvent(): void {
        $(elements.modal.close).on('click', () => {
            
            modalView.removeModal();
            
        });
        
    }

    removeModal(): void {

        modalView.removeModal();

    }
}