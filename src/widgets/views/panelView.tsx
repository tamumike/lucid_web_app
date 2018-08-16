import $ = require("jquery");


export const renderPanel = () => {
    const CSS = {
        id: "panel"
    };

    const markup = `<div id=${CSS.id}></div>`;

    $(markup).insertBefore($("#app"));
};

export const showPanel = (label: string) => {

    return $("#panel").show();
    // return $("#panel").append(`<p>${label}</p>`);
};

export const destroyPanel = () => {
    $("#panel").empty();
    $("#panel").hide();
};