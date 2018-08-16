import $ = require("jquery");

export const CSS = {
    app: "app",
    panel: "panel",
    controller: "controller",
    container: "panel__widget-container",
    title: "panel__widget-title",
    button: "panel__widget-button",
    dropdown: "panel__widget-dropdown",
    subcontainer: "panel__widget-subcontainer",
    unordered_list: "panel__widget-unordered_list",
    list_item: "panel__widget-list_item",
    heading: "panel__widget-heading",
    modal: {
        base: "modal__base",
        panel: "modal__panel",
        close: "modal__close",
        subcontainer: "modal__subcontainer",
        title: "modal__title",
        heading: "modal__heading",
        dropdown: "modal__dropdown"
    },
    acreage: {
        add: "acreage__button-add",
        dropdown: "acreage__dropdown",
        remove: "acreage__button-remove",
        list: "acreage__list",
        removeAll: "acreage__button-remove_all",
        options: "acreage__options",
        options_img: "acreage__options-img"
    }
};

export const elements = {
    app: `#${CSS.app}`,
    panel: `#${CSS.panel}`,
    controller: `#${CSS.controller}`,
    list_item: `.${CSS.list_item}`,
    modal: {
        base: `#${CSS.modal.base}`,
        panel: `#${CSS.modal.panel}`,
        close: `.${CSS.modal.close}`,
        subcontainer: `.${CSS.modal.subcontainer}`
    },
    acreage: {
        add_btn: `#${CSS.acreage.add}`,
        remove_btn: `#${CSS.acreage.remove}`,
        dropdown: `#${CSS.acreage.dropdown}`,
        list: `#${CSS.acreage.list}`,
        remove_all_btn: `#${CSS.acreage.removeAll}`,
        options: `.${CSS.acreage.options}`,
        options_filter: `.${CSS.acreage.options_img}`
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