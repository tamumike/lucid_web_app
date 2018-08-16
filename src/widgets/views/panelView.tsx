import $ = require("jquery");

import {elements, CSS} from "../views/base";

export const renderPanel = () => {

    const markup = `<div id=${CSS.panel}></div>`;

    $(markup).insertBefore($(`${elements.app}`));
};

export const showPanel = (label: string) => {

    return $(`${elements.panel}`).show();
    
};

export const destroyPanel = () => {

    $(`${elements.panel}`).empty().hide();

};