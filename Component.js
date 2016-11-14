sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/wt/controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.wt.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {

            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model
            // var oData = {
            // 	recipient: {
            // 		name: "World"
            // 	}
            // };
            // var oModel = new JSONModel(oData);
            // this.setModel(oModel);

            // var dataObject = [{
            //     Product: "Gladiator MX",
            //     Weight: "321"
            // }, {
            //     Product: "Hurricane GX",
            //     Weight: "588"
            // }, {
            //     Product: "Webcam",
            //     Weight: "700"
            // }];
            // var oModel = new JSONModel();
            // oModel.setData(dataObject);
            // this.setModel(oModel);

            // set dialog
            this.helloDialog = new HelloDialog();

            // create the views based on the url/hash
            this.getRouter().initialize();
        }
    });

});
