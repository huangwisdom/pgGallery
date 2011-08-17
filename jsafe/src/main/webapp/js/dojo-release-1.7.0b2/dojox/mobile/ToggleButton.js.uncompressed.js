require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dojox/mobile/ToggleButton", ["dojo/_base/kernel", "dojo/_base/declare", "dojo/_base/html", "dojo/_base/array", "./Button", "dijit/form/_ToggleButtonMixin"],
	function(dojo, declare, dhtml, darray, Button, ToggleButtonMixin) {

	return dojo.declare("dojox.mobile.ToggleButton", [dojox.mobile.Button, dijit.form._ToggleButtonMixin], {
		// summary:
		//		A non-templated button widget that can be in two states (checked or not).
		//		Can be base class for things like tabs or checkbox or radio buttons

		baseClass: "mblToggleButton",

		_setCheckedAttr: function(){
			this.inherited(arguments);
			var newStateClasses = (this.baseClass+' '+this["class"]).replace(/(\S+)\s*/g, "$1Checked ").split(" ");
			dojo[this.checked ? "addClass" : "removeClass"](this.focusNode || this.domNode, newStateClasses);
		}
	});
});
