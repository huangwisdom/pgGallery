require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

require.cache["dijit/form/templates/CheckBox.html"]="<div class=\"dijit dijitReset dijitInline\" role=\"presentation\"\n\t><input\n\t \t${!nameAttrSetting} type=\"${type}\" ${checkedAttrSetting}\n\t\tclass=\"dijitReset dijitCheckBoxInput\"\n\t\tdojoAttachPoint=\"focusNode\"\n\t \tdojoAttachEvent=\"onclick:_onClick\"\n/></div>\n";

define("dijit/form/CheckBox", [
	"dojo/_base/kernel",
	"..",
	"dojo/text!./templates/CheckBox.html",
	"require",
	"./ToggleButton",
	"./_CheckBoxMixin",
	"dojo/_base/NodeList", // .addClass .removeClass
	"dojo/_base/declare", // dojo.declare
	"dojo/_base/html", // dojo.attr
	"dojo/query" // dojo.query
], function(dojo, dijit, template, require){

	// module:
	//		dijit/form/CheckBox
	// summary:
	//		Checkbox widget


	dojo.declare("dijit.form.CheckBox", [dijit.form.ToggleButton, dijit.form._CheckBoxMixin], {
		// summary:
		// 		Same as an HTML checkbox, but with fancy styling.
		//
		// description:
		//		User interacts with real html inputs.
		//		On onclick (which occurs by mouse click, space-bar, or
		//		using the arrow keys to switch the selected radio button),
		//		we update the state of the checkbox/radio.
		//
		//		There are two modes:
		//			1. High contrast mode
		//			2. Normal mode
		//
		//		In case 1, the regular html inputs are shown and used by the user.
		//		In case 2, the regular html inputs are invisible but still used by
		//		the user. They are turned quasi-invisible and overlay the background-image.

		templateString: template,

		baseClass: "dijitCheckBox",

		_setValueAttr: function(/*String|Boolean*/ newValue, /*Boolean*/ priorityChange){
			// summary:
			//		Handler for value= attribute to constructor, and also calls to
			//		set('value', val).
			// description:
			//		During initialization, just saves as attribute to the <input type=checkbox>.
			//
			//		After initialization,
			//		when passed a boolean, controls whether or not the CheckBox is checked.
			//		If passed a string, changes the value attribute of the CheckBox (the one
			//		specified as "value" when the CheckBox was constructed (ex: <input
			//		dojoType="dijit.CheckBox" value="chicken">)
			//		widget.set('value', string) will check the checkbox and change the value to the
			//		specified string
			//		widget.set('value', boolean) will change the checked state.
			if(typeof newValue == "string"){
				this._set("value", newValue);
				dojo.attr(this.focusNode, 'value', newValue);
				newValue = true;
			}
			if(this._created){
				this.set('checked', newValue, priorityChange);
			}
		},
		_getValueAttr: function(){
			// summary:
			//		Hook so get('value') works.
			// description:
			//		If the CheckBox is checked, returns the value attribute.
			//		Otherwise returns false.
			return (this.checked ? this.value : false);
		},

		// Override behavior from Button, since we don't have an iconNode
		_setIconClassAttr: null,

		postMixInProperties: function(){
			this.inherited(arguments);

			// Need to set initial checked state as part of template, so that form submit works.
			// dojo.attr(node, "checked", bool) doesn't work on IE until node has been attached
			// to <body>, see #8666
			this.checkedAttrSetting = this.checked ? "checked" : "";
		},

		 _fillContent: function(/*DomNode*/ source){
			// Override Button::_fillContent() since it doesn't make sense for CheckBox,
			// since CheckBox doesn't even have a container
		},

		_onFocus: function(){
			if(this.id){
				dojo.query("label[for='"+this.id+"']").addClass("dijitFocusedLabel");
			}
			this.inherited(arguments);
		},

		_onBlur: function(){
			if(this.id){
				dojo.query("label[for='"+this.id+"']").removeClass("dijitFocusedLabel");
			}
			this.inherited(arguments);
		}
	});

	// Back compat w/1.6, remove for 2.0
	if(!dojo.isAsync){
		dojo.ready(0, function(){
			var requires = ["dijit/form/RadioButton"];
			require(requires);	// use indirection so modules not rolled into a build
		});
	}

	return dijit.form.CheckBox;
});
