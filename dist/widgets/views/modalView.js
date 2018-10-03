define(["require", "exports", "jquery", "../views/base"], function (require, exports, $, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderModal = function () {
        var markup = "<div id=" + base_1.CSS.modal.base + "></div>\n        <div id=" + base_1.CSS.modal.panel + ">\n            <div class=" + base_1.CSS.modal.close + "></div>\n        <div class=" + base_1.CSS.modal.btn_container + ">\n            <button id=" + base_1.CSS.modal.cancel_btn + " class=\"" + base_1.CSS.modal.button + " " + base_1.CSS.button + "\">Cancel</button>\n            <button id=" + base_1.CSS.modal.apply_btn + " class=\"" + base_1.CSS.modal.button + " " + base_1.CSS.button + "\">Apply</button>\n            <button id=" + base_1.CSS.modal.ok_btn + " class=\"" + base_1.CSS.modal.button + " " + base_1.CSS.button + "\">OK</button>\n        </div>\n        </div>";
        $(markup).insertBefore(base_1.elements.controller);
    };
    exports.removeModal = function () {
        $(base_1.elements.modal.base).remove();
        $(base_1.elements.modal.panel).remove();
    };
});
//# sourceMappingURL=modalView.js.map