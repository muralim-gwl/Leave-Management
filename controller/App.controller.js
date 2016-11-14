sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {

		onSubmit:function(oEvent) {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("employee-list");
		},

		onOpenDialog: function () {
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
	});

});
