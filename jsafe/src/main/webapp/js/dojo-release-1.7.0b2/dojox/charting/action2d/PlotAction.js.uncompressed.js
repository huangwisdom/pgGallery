require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dojox/charting/action2d/PlotAction", ["dojo/_base/kernel", "dojo/_base/connect", "dojo/_base/declare", "./Base", "dojo/fx/easing", "dojox/lang/functional", "dojox/lang/functional/object"], 
	function(dojo, connect, declare, Base, dfe, df, dlfo){
	
	/*=====
	dojox.charting.action2d.__PlotActionCtorArgs = function(duration, easing){
	 	//	summary:
		//		The base keyword arguments object for creating an action2d.
		//	duration: Number?
		//		The amount of time in milliseconds for an animation to last.  Default is 400.
		//	easing: dojo.fx.easing.*?
		//		An easing object (see dojo.fx.easing) for use in an animation.  The
		//		default is dojo.fx.easing.backOut.
		this.duration = duration;
		this.easing = easing;
	}
	=====*/

	var DEFAULT_DURATION = 400,	// ms
		DEFAULT_EASING   = dfe.backOut;

	return dojo.declare("dojox.charting.action2d.PlotAction", dojox.charting.action2d.Base, {
		//	summary:
		//		Base action class for plot actions.

		overOutEvents: {onmouseover: 1, onmouseout: 1},

		constructor: function(chart, plot, kwargs){
			//	summary:
			//		Create a new base PlotAction.
			//	chart: dojox.charting.Chart
			//		The chart this action applies to.
			//	plot: String?
			//		The name of the plot this action belongs to.  If none is passed "default" is assumed.
			//	kwargs: dojox.charting.action2d.__PlotActionCtorArgs?
			//		Optional arguments for the action.
			this.anim = {};

			// process common optional named parameters
			if(!kwargs){ kwargs = {}; }
			this.duration = kwargs.duration ? kwargs.duration : DEFAULT_DURATION;
			this.easing   = kwargs.easing   ? kwargs.easing   : DEFAULT_EASING;
		},

		connect: function(){
			//	summary:
			//		Connect this action to the given plot.
			this.handle = this.chart.connectToPlot(this.plot.name, this, "process");
		},

		disconnect: function(){
			//	summary:
			//		Disconnect this action from the given plot, if connected.
			if(this.handle){
				dojo.disconnect(this.handle);
				this.handle = null;
			}
		},

		reset: function(){
			//	summary:
			//		Reset the action.
		},

		destroy: function(){
			//	summary:
			//		Do any cleanup needed when destroying parent elements.
			this.inherited(arguments);
			df.forIn(this.anim, function(o){
				df.forIn(o, function(anim){
					anim.action.stop(true);
				});
			});
			this.anim = {};
		}
	});
});
