require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dijit/layout/LinkPane", [
	"dojo/_base/kernel",
	"..",
	"./ContentPane",
	"../_TemplatedMixin",
	"dojo/_base/declare" // dojo.declare
], function(dojo, dijit){

	// module:
	//		dijit/layout/LinkPane
	// summary:
	//		A ContentPane with an href where (when declared in markup)
	//		the title is specified as innerHTML rather than as a title attribute.


	dojo.declare("dijit.layout.LinkPane", [dijit.layout.ContentPane, dijit._TemplatedMixin], {
		// summary:
		//		A ContentPane with an href where (when declared in markup)
		//		the title is specified as innerHTML rather than as a title attribute.
		// description:
		//		LinkPane is just a ContentPane that is declared in markup similarly
		//		to an anchor.  The anchor's body (the words between `<a>` and `</a>`)
		//		become the title of the widget (used for TabContainer, AccordionContainer, etc.)
		// example:
		//	| <a href="foo.html">my title</a>

		// I'm using a template because the user may specify the input as
		// <a href="foo.html">title</a>, in which case we need to get rid of the
		// <a> because we don't want a link.
		templateString: '<div class="dijitLinkPane" dojoAttachPoint="containerNode"></div>',

		postMixInProperties: function(){
			// If user has specified node contents, they become the title
			// (the link must be plain text)
			if(this.srcNodeRef){
				this.title += this.srcNodeRef.innerHTML;
			}
			this.inherited(arguments);
		},

		_fillContent: function(/*DomNode*/ source){
			// Overrides _Templated._fillContent().

			// _Templated._fillContent() relocates srcNodeRef innerHTML to templated container node,
			// but in our case the srcNodeRef innerHTML is the title, so shouldn't be
			// copied
		}
	});


	return dijit.layout.LinkPane;
});
