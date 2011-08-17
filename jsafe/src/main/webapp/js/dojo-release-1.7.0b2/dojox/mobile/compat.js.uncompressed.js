require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

require({cache:{
}});

define("dojox/mobile/compat", ["dojo/_base/kernel", "dojo/_base/sniff"], function(dojo, sniff){
	dojo.getObject("mobile.compat", true, dojox);
	if(!sniff.isWebKit){
		require(["dojox/mobile/_compat"]);
	}
	return dojox.mobile.compat;
});
