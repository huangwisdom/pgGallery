require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


define("dojox/geo/charting/_base", ["dojo/_base/kernel", "dojo/_base/lang", "../../main", "dojo/_base/html", "dojox/gfx/matrix","dijit/Tooltip","dojo/NodeList-traverse"],
						

function(dojo, lang, dojox, dhtml, matrix, Tooltip, NodeListTraverse) {
	var dgc = dojo.getObject("geo.charting", true, dojox); 

	dgc.showTooltip = function(/*String*/innerHTML, /*dojox.gfx.shape*/ gfxObject, /*String[]?*/ positions){
		var arroundNode = dgc._normalizeArround(gfxObject);
		return dijit.showTooltip(innerHTML, arroundNode, positions);
	};

	dgc.hideTooltip = function( /*dojox.gfx.shape*/gfxObject){
		return dijit.hideTooltip(gfxObject);
	};

	dgc._normalizeArround = function(gfxObject){
		var bbox = dgc._getRealBBox(gfxObject);
		//var bbox = gfxObject.getBoundingBox();
		//get the real screen coords for gfx object
		var realMatrix = gfxObject._getRealMatrix() || {xx:1,xy:0,yx:0,yy:1,dx:0,dy:0};
		var point = matrix.multiplyPoint(realMatrix, bbox.x, bbox.y);
		var gfxDomContainer = dgc._getGfxContainer(gfxObject);
		gfxObject.x = dojo.position(gfxDomContainer,true).x + point.x,
		gfxObject.y = dojo.position(gfxDomContainer,true).y + point.y,
		gfxObject.width = bbox.width * realMatrix.xx,
		gfxObject.height = bbox.height * realMatrix.yy
		return gfxObject;
	};

	dgc._getGfxContainer = function(gfxObject){
		return (new dojo.NodeList(gfxObject.rawNode)).parents("div")[0];
	};

	dgc._getRealBBox = function(gfxObject){
		var bboxObject = gfxObject.getBoundingBox();
		if(!bboxObject){//the gfx object is group
			var shapes = gfxObject.children;
			bboxObject = dojo.clone(dgc._getRealBBox(shapes[0]));
			dojo.forEach(shapes, function(item){
				var nextBBox = dgc._getRealBBox(item);
				bboxObject.x = Math.min(bboxObject.x, nextBBox.x);
				bboxObject.y = Math.min(bboxObject.y, nextBBox.y);
				bboxObject.endX = Math.max(bboxObject.x + bboxObject.width, nextBBox.x + nextBBox.width);
				bboxObject.endY = Math.max(bboxObject.y + bboxObject.height, nextBBox.y + nextBBox.height);
			});
			bboxObject.width = bboxObject.endX - bboxObject.x;
			bboxObject.height = bboxObject.endY - bboxObject.y;
		}
		return bboxObject;
	};
});