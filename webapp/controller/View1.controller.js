sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sapui5dockerized.controller.View1", {
            onInit: function () {

            },
            onButtonClick: function() {
                // This function will be triggered when the button is clicked
                alert("Button clicked!");
            }
        });
    });
