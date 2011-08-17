require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dojox/charting/action2d/ChartAction", ["dojo/_base/kernel", "dojo/_base/connect", "dojo/_base/declare", "./Base"], 
	function(dojo, connect, declare, Base){

	return dojo.declare("dojox.charting.action2d.ChartAction", dojox.charting.action2d.Base, {
		//	summary:
		//		Base action class for chart actions.
	
		constructor: function(chart, plot){
			//	summary:
			//		Create a new base chart action.
			//	chart: dojox.charting.Chart
			//		The chart this action applies to.
			//	plot: String?|dojox.charting.plot2d.Base?
			//		Optional target plot for this chart action.  Default is "default".
		},
	
		connect: function(){
			//	summary:
			//		Connect this action to the chart.
			for(var i = 0; i < this._listeners.length; ++i){
				this._listeners[i].handle = connect(this.chart.node, this._listeners[i].eventName, 
						this, this._listeners[i].methodName);
			}
		},
	
		disconnect: function(){
			//	summary:
			//		Disconnect this action from the chart.
			for(var i = 0; i < this._listeners.length; ++i){
				dojo.disconnect(this._listeners[i].handle);
				delete this._listeners[i].handle;
			}
		}
});

});
