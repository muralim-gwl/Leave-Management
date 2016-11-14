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

            // var data=[
            //          {
            //            "id":"1",
            //            "name":"Bhawani singh",
            //            "designation":"SSE",
            //            "total_plan_leaves":"13",
            //            "total_sick_leaves":"5",
            //            "total_plan_taken":"5",
            //            "total_sick_taken":"2",
            //            "leave_dates" :[
            //                         {
            //                           "applied_on":"20-12-2016",
            //                           "number_of_days":"2",
            //                           "type":"planned",
            //                           "status":"approved"
            //                         }
            //
            //               ]
            //          },
            //          {
            //            "id":"2",
            //            "name":"Arjun singh",
            //            "designation":"SSE",
            //            "total_plan_leaves":"13",
            //            "total_sick_leaves":"5",
            //            "total_plan_taken":"5",
            //            "total_sick_taken":"2",
            //            "leave_dates" :[
            //                         {
            //                           "applied_on":"20-12-2016",
            //                           "number_of_days":"2",
            //                           "type":"planned",
            //                           "status":"approved"
            //                         }
            //
            //               ]
            //          }
            //  ];
            // firebase.database().ref('employees/').set(data);


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
