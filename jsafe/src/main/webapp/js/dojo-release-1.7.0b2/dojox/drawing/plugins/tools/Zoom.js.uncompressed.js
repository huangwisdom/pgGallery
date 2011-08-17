require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dojox/drawing/plugins/tools/Zoom", ["dojo","../../util/oo","../_Plugin","../../manager/_registry"], function(dojo){

	// 	zoomInc: Float
	//		The amount of zoom that will occur upon each click.
	var zoomInc = Math.pow(2.0,0.25),
	//
	//	maxZoom: Number
	//		The maximum the canvas can be zoomed in. 10 = 1000%
	maxZoom = 10,
	//
	//	minZoom: Float
	//		The most the canvas can be zoomed out. .1 = 10%
	minZoom = 0.1,
	//
	//	zoomFactor: [readonly] Float
	//		The current zoom amount
	zoomFactor = 1,
	
	dt = dojox.drawing.plugins.tools;
	
	dt.ZoomIn = dojox.drawing.util.oo.declare(
		// summary:
		//		A plugin that allows for zooming the canvas in and out. An
		//		action-tool is added to the toolbar with plus, minus and 100%
		//		buttons.
		//
		function(options){
			// mix in private vars
			
		},
		{}
	);
	
	dt.ZoomIn = dojox.drawing.util.oo.declare(
		// summary:
		dojox.drawing.plugins._Plugin,
		function(options){
			
		},
		{
			type:"dojox.drawing.plugins.tools.ZoomIn",
			onZoomIn: function(){
				// summary:
				//		Handles zoom in.
				//
				zoomFactor *= zoomInc;
				zoomFactor = Math.min(zoomFactor, maxZoom);
				this.canvas.setZoom(zoomFactor);
				this.mouse.setZoom(zoomFactor);
			},
			onClick: function(){
				this.onZoomIn();
			}
		}
	);
	
	dt.Zoom100 = dojox.drawing.util.oo.declare(
		// summary:
		dojox.drawing.plugins._Plugin,
		function(options){
			
		},
		{
			type:"dojox.drawing.plugins.tools.Zoom100",
			onZoom100: function(){
				// summary:
				//		Zooms to 100%
				//
				zoomFactor = 1;
				this.canvas.setZoom(zoomFactor);
				this.mouse.setZoom(zoomFactor);
			},
			onClick: function(){
				this.onZoom100();
			}
		}
	);
	
	dt.ZoomOut = dojox.drawing.util.oo.declare(
		// summary:
		dojox.drawing.plugins._Plugin,
		function(options){
			
		},
		{
			type:"dojox.drawing.plugins.tools.ZoomOut",
			onZoomOut: function(){
				// summary:
				//		Handles zoom out.
				//
				zoomFactor /= zoomInc;
				zoomFactor = Math.max(zoomFactor, minZoom);
				this.canvas.setZoom(zoomFactor);
				this.mouse.setZoom(zoomFactor);
			},
			onClick: function(){
				this.onZoomOut();
			}
		}
	);

	
	dt.ZoomIn.setup = {
		name:"dojox.drawing.plugins.tools.ZoomIn",
		tooltip:"Zoom In"
	};
	dojox.drawing.register(dt.ZoomIn.setup, "plugin");
	
	dt.Zoom100.setup = {
		name:"dojox.drawing.plugins.tools.Zoom100",
		tooltip:"Zoom to 100%"
	};
	dojox.drawing.register(dt.Zoom100.setup, "plugin");
	
	dt.ZoomOut.setup = {
		name:"dojox.drawing.plugins.tools.ZoomOut",
		tooltip:"Zoom In"
	};
	dojox.drawing.register(dt.ZoomOut.setup, "plugin");

});