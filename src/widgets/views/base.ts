import $ = require("jquery");

export const CSS = {
    container: "panel__widget-container",
    title: "panel__widget-title",
    button: "panel__widget-button",
    dropdown: "panel__widget-dropdown",
    subcontainer: "panel__widget-subcontainer",
    unordered_list: "panel__widget-unordered_list",
    list_item: "panel__widget-list_item",
    heading: "panel__widget-heading",
    acreage: {
        add: "acreage__button-add",
        dropdown: "acreage__dropdown",
        remove: "acreage__button-remove",
        list: "acreage__list",
        removeAll: "acreage__button-remove_all",
        options: "acreage__options"
    }
};

export const elements = {
    panel: `#panel`,
    list_item: `.${CSS.list_item}`,
    acreage: {
        add_btn: `#${CSS.acreage.add}`,
        remove_btn: `#${CSS.acreage.remove}`,
        dropdown: `#${CSS.acreage.dropdown}`,
        list: `#${CSS.acreage.list}`,
        remove_all_btn: `#${CSS.acreage.removeAll}`
    }
};

export const acreageProducers = [
    "AllAcreage",
    "Ameredev",
    "Apache",
    "BHP",
    "Caza",
    "Centennial",
    "Chevron",
    "Chi",
    "Chisholm",
    "Cimarex",
    "Concho",
    "Devon",
    "Energen",
    "EOG",
    "Halcon",
    "KaiserFrancis",
    "Lilis",
    "Limestone",
    "Marathon",
    "Matador",
    "Mewbourne",
    "Murchison",
    "Oasis",
    "ReadStevens",
    "Taprock",
    "WPX",
    "XTO",
    "Yates"
];