import $ = require("jquery");
import {CSS} from "./base";

export const renderWidget = () => {

    const markup = 
    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>Coordinates</p>
        <button class=${CSS.panel_obj.button}>X Y</button>
        <ul ${CSS.panel_obj.unordered_list}>
            <li class=${CSS.panel_obj.list_item}>Test</li>
        </ul>
    </div>`;

    $("#panel").append(markup);  
};