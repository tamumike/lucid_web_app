import $ = require('jquery');
import {elements, CSS} from "./base";

export const renderWidget = (): void => {

    const markup = 
    `<div class=${CSS.panel_obj.subcontainer}>
        <p class=${CSS.panel_obj.title}>Draw</p>
        <div class=${CSS.panel_obj.divider}></div>
        <p class=${CSS.panel_obj.heading}>Select Draw Mode</p>
        <div id=${CSS.draw.modes_container}>
            <div class=${CSS.draw.mode_div} id=${CSS.draw.mode_point} title="Point"></div>
            <div class=${CSS.draw.mode_div} id=${CSS.draw.mode_line} title="Polyline"></div>
            <div class=${CSS.draw.mode_div} id=${CSS.draw.mode_polygon} title="Polygon"></div>
        </div>
    </div>`;

    $(elements.panel).append(markup);
};