import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const excludeNames: string[] = ["System"];

export const renderWidget = (): void => {

    const markup = 
    `<div class=${CSS.panel_obj.container}>
        <p class=${CSS.panel_obj.title}>Symbology</p>
        <div class=${CSS.panel_obj.divider}></div>
        <p class=${CSS.panel_obj.heading}>Select Layer</p>
        <div class=${CSS.panel_obj.divider2}></div>
        <ul id=${CSS.symbology.list} class=${CSS.panel_obj.unordered_list}>
            <li class="${CSS.panel_obj.list_item} placeholder">No Current Layers</li>
        </ul>
    </div>`;

    $(elements.panel).append(markup);

};

export const renderListItem = (names: string[]): void => {

    if (names.length > 0) $(`li.placeholder`).remove();
    
    names.forEach((name) => {
        
        const markup = `<li class=${CSS.symbology.list_item}>${name}</li>`;

        $(elements.symbology.list).append(markup);
        
    });

};

export const renderSymbologyPanel = (name: string, info: any): void => {

    const markup = 
        `<div class=${CSS.modal.subcontainer}>
            <p class=${CSS.modal.heading}>${name}</p>
            <div class=${CSS.symbology.values_container}>
                <ul id=${CSS.symbology.avail_opts} class=${CSS.modal.options_list}>
                    ${renderValuesList(name, info)}
                </ul>
            </div>
            <div id=${CSS.symbology.render_container} class=${CSS.symbology.values_container}>
                <label class=${CSS.symbology.label} for=${CSS.symbology.opacity_input}>Opacity</label>
                <input type="text" size="2" maxLength="2" id=${CSS.symbology.opacity_input} />
                <div id=${CSS.symbology.slider_container}>
                    <input type="range" id=${CSS.symbology.slider_r} class=${CSS.symbology.slider} min="0" max="255" />
                    <input type="range" id=${CSS.symbology.slider_g} class=${CSS.symbology.slider} min="0" max="255" />
                    <input type="range" id=${CSS.symbology.slider_b} class=${CSS.symbology.slider} min="0" max="255" />
                </div>
                <div id=${CSS.symbology.display_container}>
                    <div id=${CSS.symbology.previous_color_display} class=${CSS.symbology.color_display}>
                        <p class=${CSS.symbology.display_label}>Previous</p>
                    </div>
                    <div id=${CSS.symbology.current_color_display} class=${CSS.symbology.color_display}>
                        <p class=${CSS.symbology.display_label}>Current</p>
                    </div>
                </div>
            </div>
            <div class=${CSS.modal.btn_container}>
                <button id=${CSS.modal.cancel_btn} class="${CSS.modal.button} ${CSS.button}">Cancel</button>
                <button id=${CSS.modal.apply_btn} class="${CSS.modal.button} ${CSS.button}">Apply</button>
                <button id=${CSS.modal.ok_btn} class="${CSS.modal.button} ${CSS.button}">OK</button>
            </div>
        </div>`;

    $(elements.modal.panel).append(markup);

    $(elements.modal.list_item).first().toggleClass('active-filter');
    setElementValues($('.active-filter').text().trim(), info);

};

const renderValuesList = (name: string, info: any): string => {

    let markup: string = '';

    console.log(info);
    

    if (info.definitionExpression) {

        info.definitionExpression.forEach((value) => {

            markup += `<li class=${CSS.modal.list_item}>${value}</li>`;
    
        });

    } else if (info.renderer.type === "uniqueValue") {

        info.renderer.uniqueValueInfos.forEach((value) => {

            markup += `<li class=${CSS.modal.list_item}>${value.label}</li>`;

        });

    } else {

        markup += `<li class=${CSS.modal.list_item}>${name}</li>`;

    }

    return markup;

};

export const setElementValues = (name: string, props: any): void => {

    if (props.renderer.type === "uniqueValue") {
        props.renderer = getUniqueValueColor(name, props.renderer);
    }

    console.log(props);


    // Set slider values with current colors
    $(elements.symbology.slider_r).val(props.renderer.symbol.color[0]);
    $(elements.symbology.slider_g).val(props.renderer.symbol.color[1]);
    $(elements.symbology.slider_b).val(props.renderer.symbol.color[2]);

    // Set opacity textbox value
    $(elements.symbology.opacity_input).val(props.opacity);

    updateColorDisplay($(elements.symbology.previous_color_display));
    updateColorDisplay($(elements.symbology.current_color_display));

};

const getUniqueValueColor = (name: string, rendererProps: any) => {

    let valueInfo: any = {};

    if (name.indexOf('Acreage') !== -1) {

        name = name.slice(name.indexOf('-')+1).trim();

    }

    valueInfo = rendererProps.uniqueValueInfos.filter((info) => {
        
        return info.label === name;
        
    });

    return {
            label: valueInfo[0].label, 
            symbol: valueInfo[0].symbol, 
            value: valueInfo[0].value
            };

};

export const updateColorDisplay = (element: JQuery): void => {

    let rValue = $(elements.symbology.slider_r).val() as number;
    let gValue = $(elements.symbology.slider_g).val() as number;
    let bValue = $(elements.symbology.slider_b).val() as number;

    element.css({
        "background-color": `rgb(${rValue}, ${gValue}, ${bValue})`
    });

};

export const isActive = (element: JQuery): boolean => {

    return element.hasClass("active-feature");

};

export const toggleCurrentActive = (): void => {

    let currentActive = $(".active-filter");

    currentActive.each(index => {

        $(currentActive[index]).toggleClass("active-filter");

    });

};