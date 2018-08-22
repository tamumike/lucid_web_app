import $ = require("jquery");

export const CSS = {
    app: "app",
    panel: "panel",
    controller: "controller",
    dropdown: "widget-dropdown",
    panel_obj: {
        container: "panel__widget-container",
        title: "panel__widget-title",
        button: "panel__widget-button",
        subcontainer: "panel__widget-subcontainer",
        unordered_list: "panel__widget-unordered_list",
        list_item: "panel__widget-list_item",
        heading: "panel__widget-heading"
    },
    modal: {
        base: "modal__base",
        panel: "modal__panel",
        close: "modal__close",
        subcontainer: "modal__subcontainer",
        title: "modal__title",
        heading: "modal__heading",
        dropdown: "modal__dropdown",
        options_list: "modal__options-list",
        button: "modal__btn",
        apply_btn: "modal__apply-btn",
        cancel_btn: "modal__cancel-btn",
        ok_btn: "modal__ok-btn",
        btn_container: "modal__btn-container"
    },
    acreage: {
        add: "acreage__button-add",
        dropdown: "acreage__dropdown",
        remove: "acreage__button-remove",
        list: "acreage__list",
        list_item: "acreage__list-item",
        removeAll: "acreage__button-remove_all",
        options: "acreage__options",
        options_img: "acreage__options-img",
        filter_img: "acreage__filter-img",
        remove_img: "acreage__remove-img",
        filter_list: "acreage__filter-list"
    },
    drillingInfo: {
        tab_container: "drillingInfo__tab-container",
        tab_list: "drillingInfo__tab-list",
        tab: "drillingInfo__tab",
        action_container: "drillingInfo__function-container",
        add_all_btn: "drillingInfo__add-all-btn",
        search_btn: "drillingInfo__search-btn",
        values_container: "drillingInfo__values-container"
    }
};

export const elements = {
    app: `#${CSS.app}`,
    panel: `#${CSS.panel}`,
    controller: `#${CSS.controller}`,
    list_item: `.${CSS.panel_obj.list_item}`,
    modal: {
        base: `#${CSS.modal.base}`,
        panel: `#${CSS.modal.panel}`,
        close: `.${CSS.modal.close}`,
        dropdown: `#${CSS.modal.dropdown}`,
        subcontainer: `.${CSS.modal.subcontainer}`,
        options_list: `.${CSS.modal.options_list}`,
        apply_btn: `#${CSS.modal.apply_btn}`,
        cancel_btn: `#${CSS.modal.cancel_btn}`,
        ok_btn: `#${CSS.modal.ok_btn}`
    },
    acreage: {
        add_btn: `#${CSS.acreage.add}`,
        remove_btn: `#${CSS.acreage.remove}`,
        dropdown: `#${CSS.acreage.dropdown}`,
        list: `#${CSS.acreage.list}`,
        list_item: `.${CSS.acreage.list_item}`,
        remove_all_btn: `#${CSS.acreage.removeAll}`,
        options: `.${CSS.acreage.options}`,
        options_filter: `#${CSS.acreage.filter_img}`,
        options_remove: `#${CSS.acreage.remove_img}`,
        filter_list: `#${CSS.acreage.filter_list}`
    },
    drillingInfo: {
        tab_container: `#${CSS.drillingInfo.tab_container}`,
        tab_list: `#${CSS.drillingInfo.tab_list}`,
        tab: `.${CSS.drillingInfo.tab}`,
        action_container: `#${CSS.drillingInfo.action_container}`,
        add_all_btn: `#${CSS.drillingInfo.add_all_btn}`,
        search_btn: `#${CSS.drillingInfo.search_btn}`,
        values_container: `#${CSS.drillingInfo.values_container}`
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