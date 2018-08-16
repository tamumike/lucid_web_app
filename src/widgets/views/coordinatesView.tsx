import $ = require("jquery");
import {CSS} from "./base";

export const renderWidget = () => {

    const markup = 
    `<div class=${CSS.container}>
        <p class=${CSS.title}>Coordinates</p>
        <button class=${CSS.button}>X Y</button>
        <ul ${CSS.unordered_list}>
            <li class=${CSS.list_item}>Test</li>
        </ul>
    </div>`;

    $("#panel").append(markup);  
};