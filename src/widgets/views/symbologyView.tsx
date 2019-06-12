import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const excludeNames: string[] = ["Lucid System", "STR", "Meters", "Surface Ownership", "Graphics", "BLM"];

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
            <p class=${CSS.modal.title}>${name}</p>
            <div class=${CSS.symbology.values_container}>
                <ul id=${CSS.symbology.avail_opts} class=${CSS.modal.options_list}>
                    ${renderValuesList(name, info)}
                </ul>
            </div>
            <div id=${CSS.symbology.render_container} class=${CSS.symbology.values_container}>
                <label class=${CSS.symbology.label} for=${CSS.symbology.opacity_input}>Opacity</label>
                <input type="text" size="3" maxLength="3" id=${CSS.symbology.opacity_input} class=${CSS.textbox} />
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
            <img class=${CSS.search_img} />
            <input placeholder="Search..." type="text" id=${CSS.symbology.lyr_search} class=${CSS.textbox}></input>
        </div>`;

    $(elements.modal.panel).append(markup);

    $(elements.modal.list_item).first().toggleClass('active-filter');
    setElementValues($('.active-filter').text().trim(), info);

};

const renderValuesList = (name: string, info: any): string => {

    let markup: string = '';

    if (info.definitionExpression && info.definitionExpression !== '') {

        info.definitionExpression.forEach((value) => {

            markup += `<li class=${CSS.modal.list_item}>${value}</li>`;
    
        });

    } else if (info.renderer.type === "unique-value") {

        info.renderer.uniqueValueInfos.forEach((value) => {

            markup += `<li class=${CSS.modal.list_item}>${value.value}</li>`;

        });

    } else {

        markup += `<li class=${CSS.modal.list_item}>${name}</li>`;

    }

    return markup;

};

export const setElementValues = (name: string, props: any): void => {
    
    let symbol;

    (props.renderer.type === "unique-value") ? 
    symbol = getUniqueValueColor(name, props.newRenderer) : 
    symbol = getSimpleValueColor(props.newRenderer);
    
    // Set slider values with current colors
    $(elements.symbology.slider_r).val(symbol.symbol.color[0]);
    $(elements.symbology.slider_g).val(symbol.symbol.color[1]);
    $(elements.symbology.slider_b).val(symbol.symbol.color[2]);

    // Set opacity textbox value
    $(elements.symbology.opacity_input).val((props.opacity * 100));

    updateColorDisplay($(elements.symbology.previous_color_display), props, name);
    updateColorDisplay($(elements.symbology.current_color_display));

};

const getUniqueValueColor = (name: string, rendererProps: any) => {

    let valueInfo: any = {};

    valueInfo = rendererProps.uniqueValueInfos.filter((info) => {
        
        return info.value === name;
        
    });
    
    return {
            symbol: valueInfo[0].symbol
            };

};

const getSimpleValueColor = (rendererProps: any) => {

    return {
        symbol: rendererProps.symbol
    };

};

export const getSliderValues = (): {r: number, g: number, b: number} => {

    return {
        r: Number($(elements.symbology.slider_r).val() as number),
        g: Number($(elements.symbology.slider_g).val() as number),
        b: Number($(elements.symbology.slider_b).val() as number)
    }

};

export const updateColorDisplay = (element: JQuery, props? : any, name? :string): void => {

    const elementID = element.attr('id');

    const slider = getSliderValues();

    if (elementID === 'symbology__current-color-display') {

        element.css({
            "background-color": `rgb(${slider.r}, ${slider.g}, ${slider.b})`
        });

    } else {

        let value;

        if (props) {

            if (props.renderer.type === 'unique-value') {

                value = props.renderer.uniqueValueInfos.filter((info) => {
    
                    return info.value === name;
        
                })[0].symbol.color;
            } else {
    
                value = props.renderer.symbol.color;
    
            }

        } else {

            value = [slider.r, slider.g, slider.b];

        }

            element.css({
                "background-color": `rgb(${value[0]}, ${value[1]}, ${value[2]})`
            });
    
    }

};

export const toggleCurrentActive = (): void => {

    let currentActive = $(".active-filter");

    currentActive.each(index => {

        $(currentActive[index]).toggleClass("active-filter");

    });

};

export const setRendererProps = (props: any): void => {

    let name = $('.active-filter').text().trim();
    let sliders = getSliderValues();
    
    if (props.renderer.type === 'unique-value') {

        props.newRenderer.uniqueValueInfos.forEach((info) => {

            if (info.value === name) {
    
                info.symbol.color = [sliders.r, sliders.g, sliders.b];
    
            }
    
        });

    } else {

        props.newRenderer.symbol.color =  [sliders.r, sliders.g, sliders.b];

    }



    props.opacity = parseInt($(elements.symbology.opacity_input).val() as string) * 0.01;
    

};

export const getSearchInput = (element: JQuery, layers: string[]): void => {

    const input = element.val() as string;

    let subArray: string[];

    subArray = layers.filter((value) => {

        return value.startsWith(input.toUpperCase());

    });

    scrollOptionsDiv(subArray[0]);

};

const scrollOptionsDiv = (value: string): void => {

    const $parent = $(elements.symbology.avail_opts).parent();
    const element = $(`${elements.symbology.avail_opts} > li:contains(${value})`);

    if (element.length > 0) {
        
        $parent.scrollTop(($parent.scrollTop() as number) + (element.position().top as number));
    }

};