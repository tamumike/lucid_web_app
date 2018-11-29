import $ = require("jquery");
import {CSS, elements} from "./base";

export const renderWidget = () => {

    const markup = 
    `<div id=${CSS.coordinates.values_container}>
        <p id=${CSS.coordinates.values}>0°, 0°</p>
        <div id=${CSS.coordinates.action_container}>
            <img id=${CSS.coordinates.copy_btn} class=${CSS.coordinates.action_btn} title="Copy" />
            <img id=${CSS.coordinates.target_btn} class=${CSS.coordinates.action_btn} title="Target" />
        </div>
    </div>`;

    $(elements.coordinates.container).append(markup);
};

export const setCoordinateValues = (value: string) => {

    $(elements.coordinates.values).text(value);

};