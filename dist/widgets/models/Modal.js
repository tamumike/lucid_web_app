define(["require", "exports", "tslib", "jquery", "../views/modalView", "../views/base"], function (require, exports, tslib_1, $, modalView, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    modalView = tslib_1.__importStar(modalView);
    var Modal = (function () {
        function Modal() {
            modalView.renderModal();
            this.addModalCloseEvent();
        }
        Modal.prototype.addModalCloseEvent = function () {
            $(base_1.elements.modal.close).on('click', function () {
                modalView.removeModal();
            });
        };
        Modal.prototype.removeModal = function () {
            modalView.removeModal();
        };
        return Modal;
    }());
    exports.default = Modal;
});
//# sourceMappingURL=Modal.js.map