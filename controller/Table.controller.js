// Controller definition
sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/json/JSONModel'
  ], function(jQuery, Controller, Filter, JSONModel) {
  "use strict";

  var TableController = Controller.extend("myView.Template", {

    onInit : function (oEvent) {
      var dataObject = [
        {Product: "Gladiator MX", Weight: "321"},
        {Product: "Hurricane GX", Weight: "588"},
        {Product: "Webcam", Weight: "700"}];
      var oModel = new JSONModel();
      oModel.setData(dataObject);
    sap.ui.getCore().setModel(oModel);
    },

	onAdd: function(){
		var oTable = this.getView().byId("idProductsTable");
		var oModel = oTable.getModel().getProperty("/");
		var oNewObject = {Product:"New Item", Weight:"0"};
		oModel.push(oNewObject);
		oTable.getModel().setProperty("/", oModel);
	},

	onDelete: function(oEvent){
		var oSource = oEvent.getSource().getParent();
		var oContext = oSource.getBindingContext();
		        //Get the BindingContext Path
		var oPath = oContext.getPath();
		//Get the Index
		var oIndex = parseInt(oPath.slice(-1));
		var oTable = this.getView().byId("idProductsTable");
		var oModel = oTable.getModel().getData();
		if(oIndex === 0 || oIndex === 1){
			oModel.splice(oIndex, 1);
		}
		else{
			oModel.splice(oIndex, oIndex-1);
		}
		//Bind the Updated Model to List
		sap.ui.getCore().getModel().setProperty("/", oModel);
	}

  });

  return TableController;

});

// Instantiate the View and display
var oView = sap.ui.xmlview({
      viewContent: jQuery('#oView').html()
});

oView.placeAt('content');
