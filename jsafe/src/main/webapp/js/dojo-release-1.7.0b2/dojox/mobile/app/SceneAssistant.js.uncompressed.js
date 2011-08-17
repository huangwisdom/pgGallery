require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dojox/mobile/app/SceneAssistant", ["dojo","dijit","dojox"], function(dojo, dijit, dojox){
dojo.getObject("dojox.mobile.app.SceneAssistant", 1);
/* builder delete begin
dojo.provide("dojox.mobile.app.SceneAssistant");

 builder delete end */
dojo.experimental("dojox.mobile.app.SceneAssistant");

dojo.declare("dojox.mobile.app.SceneAssistant", null, {
	// summary:
	//    The base class for all scene assistants.

	constructor: function(){

	},

	setup: function(){
		// summary:
		//    Called to set up the widget.  The UI is not visible at this time

	},

	activate: function(params){
		// summary:
		//    Called each time the scene becomes visible.  This can be as a result
		//    of a new scene being created, or a subsequent scene being destroyed
		//    and control transferring back to this scene assistant.
		// params:
		//    Optional paramters, only passed when a subsequent scene pops itself
		//    off the stack and passes back data.
	},

	deactivate: function(){
		// summary:
		//    Called each time the scene becomes invisible.  This can be as a result
		//    of it being popped off the stack and destroyed,
		//    or another scene being created and pushed on top of it on the stack
	},

	destroy: function(){
	
		var children =
			dojo.query("> [widgetId]", this.containerNode).map(dijit.byNode);
		dojo.forEach(children, function(child){ child.destroyRecursive(); });
	
		this.disconnect();
	},

	connect: function(obj, method, callback){
		if(!this._connects){
			this._connects = [];
		}
		this._connects.push(dojo.connect(obj, method, callback));
	},

	disconnect: function(){
		dojo.forEach(this._connects, dojo.disconnect);
		this._connects = [];
	}
});


return dojo.getObject("dojox.mobile.app.SceneAssistant");});
require(["dojox/mobile/app/SceneAssistant"]);
