define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CSS = {
        app: "app",
        panel: "panel",
        controller: "controller",
        widget_container: "controller__widget-container",
        dropdown: "widget-dropdown",
        textbox: "textbox",
        button: "btn",
        search_img: "search__img",
        add_img: "add__img",
        remove_img: "remove__img",
        panel_obj: {
            container: "panel__widget-container",
            title: "panel__widget-title",
            button: "panel__widget-button",
            subcontainer: "panel__widget-subcontainer",
            unordered_list: "panel__widget-unordered_list",
            list_item: "panel__widget-list_item",
            heading: "panel__widget-heading",
            tab_container: "panel__tab-container",
            tab_list: "panel__tab-container-list",
            tab: "panel__tab-container-tab",
            divider: "panel__divider",
            divider2: "panel__divider-two"
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
            btn_container: "modal__btn-container",
            list_item: "modal__list-item"
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
            filter_list: "acreage__filter-list",
            action_container: "acreage__action-container"
        },
        drillingInfo: {
            action_container: "drillingInfo__action-container",
            add_btn: "drillingInfo__add-btn",
            remove_btn: "drillingInfo__remove-btn",
            search_btn: "drillingInfo__search-btn",
            values_container: "drillingInfo__values-container",
            avail_opts: "drillingInfo__avail-opts",
            selected_opts: "drillingInfo__selected-opts",
            op_search: "drillingInfo__op-search"
        },
        thirdParty: {
            add_btn: "thirdParty__add-btn",
            dropdown: "thirdParty__dropdown",
            action_container: "thirdParty__action-container",
            list: "thirdParty__list",
            list_item: "thirdParty__list-item",
            options: "thirdParty__options",
            options_img: "thirdParty__options-img",
            filter_img: "thirdParty__filter-img",
            remove_img: "thirdParty__remove-img",
            values_container: "thirdParty__values-container",
            avail_opts: "thirdParty__avail-opts",
            selected_opts: "thirdParty__selected-opts",
            op_search: "thirdParty__op-search",
            field_select: "thirdParty__field-select"
        },
        symbology: {
            list: "symbology__list",
            list_item: "symbology__list-item",
            avail_opts: "symbology__avail-opts",
            values_container: "symbology__values-container",
            render_container: "symbology__render-container",
            slider_container: "symbology__slider-container",
            opacity_input: "symbology__opacity-input",
            label: "symbology__label",
            slider: "symbology__slider",
            display_container: "symbology__display-container",
            color_display: "symbology__color-display",
            current_color_display: "symbology__current-color-display",
            previous_color_display: "symbology__previous-color-display",
            display_label: "symbology__display-label",
            slider_r: "symbology__slider-r",
            slider_g: "symbology__slider-g",
            slider_b: "symbology__slider-b",
            lyr_search: "symbology__lyr-search"
        },
        coordinates: {
            container: "coordinates__container",
            values_container: "coordinates__values-container",
            values: "coordinates__values",
            action_container: "coordinates__action-container",
            action_btn: "coordinates__action-btn",
            copy_btn: "coordinates__copy-btn",
            target_btn: "coordinates__target-btn"
        },
        measure: {
            action_container: "measure__action-container",
            go_btn: "measure__go-btn",
            is_measuring_img: "measure__is-measuring",
            unit_select: "measure__unit-select"
        },
        layers: {
            action_container: "layers__action-container",
            list_item: "layers__list-item",
            list: "layers__list"
        }
    };
    exports.elements = {
        app: "#" + exports.CSS.app,
        panel: "#" + exports.CSS.panel,
        controller: "#" + exports.CSS.controller,
        widget_container: "." + exports.CSS.widget_container,
        list_item: "." + exports.CSS.panel_obj.list_item,
        textbox: "." + exports.CSS.textbox,
        button: "." + exports.CSS.button,
        panel_obj: {
            tab_container: "#" + exports.CSS.panel_obj.tab_container,
            tab_list: "#" + exports.CSS.panel_obj.tab_list,
            tab: "." + exports.CSS.panel_obj.tab
        },
        modal: {
            base: "#" + exports.CSS.modal.base,
            panel: "#" + exports.CSS.modal.panel,
            close: "." + exports.CSS.modal.close,
            dropdown: "#" + exports.CSS.modal.dropdown,
            subcontainer: "." + exports.CSS.modal.subcontainer,
            options_list: "." + exports.CSS.modal.options_list,
            apply_btn: "#" + exports.CSS.modal.apply_btn,
            cancel_btn: "#" + exports.CSS.modal.cancel_btn,
            ok_btn: "#" + exports.CSS.modal.ok_btn,
            list_item: "." + exports.CSS.modal.list_item
        },
        acreage: {
            add_btn: "#" + exports.CSS.acreage.add,
            remove_btn: "#" + exports.CSS.acreage.remove,
            dropdown: "#" + exports.CSS.acreage.dropdown,
            list: "#" + exports.CSS.acreage.list,
            list_item: "." + exports.CSS.acreage.list_item,
            remove_all_btn: "#" + exports.CSS.acreage.removeAll,
            options: "." + exports.CSS.acreage.options,
            options_filter: "#" + exports.CSS.acreage.filter_img,
            options_remove: "#" + exports.CSS.acreage.remove_img,
            filter_list: "#" + exports.CSS.acreage.filter_list,
            action_container: "#" + exports.CSS.acreage.action_container
        },
        drillingInfo: {
            action_container: "#" + exports.CSS.drillingInfo.action_container,
            add_btn: "#" + exports.CSS.drillingInfo.add_btn,
            remove_btn: "#" + exports.CSS.drillingInfo.remove_btn,
            search_btn: "#" + exports.CSS.drillingInfo.search_btn,
            values_container: "." + exports.CSS.drillingInfo.values_container,
            avail_opts: "#" + exports.CSS.drillingInfo.avail_opts,
            selected_opts: "#" + exports.CSS.drillingInfo.selected_opts,
            op_search: "#" + exports.CSS.drillingInfo.op_search
        },
        thirdParty: {
            add_btn: "#" + exports.CSS.thirdParty.add_btn,
            dropdown: "#" + exports.CSS.thirdParty.dropdown,
            action_container: "#" + exports.CSS.thirdParty.action_container,
            list: "#" + exports.CSS.thirdParty.list,
            list_item: "." + exports.CSS.thirdParty.list_item,
            options: "." + exports.CSS.thirdParty.options,
            options_img: "." + exports.CSS.thirdParty.options_img,
            filter_img: "#" + exports.CSS.thirdParty.filter_img,
            remove__img: "#" + exports.CSS.thirdParty.remove_img,
            values_container: "." + exports.CSS.thirdParty.values_container,
            avail_opts: "#" + exports.CSS.thirdParty.avail_opts,
            selected_opts: "#" + exports.CSS.thirdParty.selected_opts,
            op_search: "#" + exports.CSS.thirdParty.op_search,
            field_select: "#" + exports.CSS.thirdParty.field_select
        },
        symbology: {
            list: "#" + exports.CSS.symbology.list,
            list_item: "." + exports.CSS.symbology.list_item,
            avail_opts: "#" + exports.CSS.symbology.avail_opts,
            values_container: "." + exports.CSS.symbology.values_container,
            render_container: "#" + exports.CSS.symbology.render_container,
            slider_container: "#" + exports.CSS.symbology.slider_container,
            opacity_input: "#" + exports.CSS.symbology.opacity_input,
            label: "." + exports.CSS.symbology.label,
            slider: "." + exports.CSS.symbology.slider,
            display_container: "#" + exports.CSS.symbology.display_container,
            color_display: "." + exports.CSS.symbology.color_display,
            current_color_display: "#" + exports.CSS.symbology.current_color_display,
            previous_color_display: "#" + exports.CSS.symbology.previous_color_display,
            display_label: "." + exports.CSS.symbology.display_label,
            slider_r: "#" + exports.CSS.symbology.slider_r,
            slider_g: "#" + exports.CSS.symbology.slider_g,
            slider_b: "#" + exports.CSS.symbology.slider_b,
            lyr_search: "#" + exports.CSS.symbology.lyr_search
        },
        coordinates: {
            container: "#" + exports.CSS.coordinates.container,
            values_container: "#" + exports.CSS.coordinates.values_container,
            values: "#" + exports.CSS.coordinates.values,
            action_container: "#" + exports.CSS.coordinates.action_container,
            action_btn: "." + exports.CSS.coordinates.action_btn,
            copy_btn: "#" + exports.CSS.coordinates.copy_btn,
            target_btn: "#" + exports.CSS.coordinates.target_btn
        },
        measure: {
            action_container: "#" + exports.CSS.measure.action_container,
            go_btn: "#" + exports.CSS.measure.go_btn,
            unit_select: "#" + exports.CSS.measure.unit_select
        },
        layers: {
            action_container: "#" + exports.CSS.layers.action_container,
            list_item: "." + exports.CSS.layers.list_item,
            list: "#" + exports.CSS.layers.list
        }
    };
});
//# sourceMappingURL=base.js.map