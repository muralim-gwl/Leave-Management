sap.ui.define([
    "jquery.sap.global",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/wt/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(jQuery, Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.wt.controller.EmployeeList", {
        onInit: function(onEvent) {
            var dataObject = [{
                Product: "Gladiator MX",
                Weight: "321"
            }, {
                Product: "Hurricane GX",
                Weight: "588"
            }, {
                Product: "Webcam",
                Weight: "700"
            }];
            var oModel = new JSONModel();
            oModel.setData(dataObject);
            this.getView().setModel(oModel);
            //  	this.setModel(oModel);
        },


        onAdd: function() {
            var oTable = this.getView().byId("idProductsTable");
            var oModel = oTable.getModel().getProperty("/");
            var oNewObject = {
                Product: "New Item",
                Weight: "0"
            };
            oModel.push(oNewObject);
            oTable.getModel().setProperty("/", oModel);
        },

        onDelete: function(oEvent) {
            var oSource = oEvent.getSource().getParent();
            var oContext = oSource.getBindingContext();
            //Get the BindingContext Path
            var oPath = oContext.getPath();
            //Get the Index
            var oIndex = parseInt(oPath.slice(-1));
            var oTable = this.getView().byId("idProductsTable");
            var oModel = oTable.getModel().getData();
            if (oIndex === 0 || oIndex === 1) {
                oModel.splice(oIndex, 1);
            } else {
                oModel.splice(oIndex, oIndex - 1);
            }
            //Bind the Updated Model to List
            sap.ui.getCore().getModel().setProperty("/", oModel);
        },

        onFilterEmployees: function(oEvent) {

            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.getView().byId("employeeList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress: function(oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail");
        }
    });

});
