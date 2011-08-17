require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dojox/geo/openlayers/Point", ["dojo/_base/kernel", "dojo/_base/declare", "dojox/geo/openlayers/Geometry"], function(dojo, declare,
																																															geometryArg){

	return dojo.declare("dojox.geo.openlayers.Point", dojox.geo.openlayers.Geometry, {
		//	summary:
		//		A Point geometry handles description of points to be rendered in a GfxLayer

		setPoint : function(p){
			//	summary:
			//		Sets the point for this geometry.
			//	p : {x, y} Object
			//		The point geometry.
			this.coordinates = p;
		},

		getPoint : function(){
			//	summary:
			//		Gets the point defining this geometry.
			//	returns: {x, y} Object
			//		The point defining this geometry.
			return this.coordinates;
		}
	});
});