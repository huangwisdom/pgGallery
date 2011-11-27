require.built();
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define("dijit/form/_ExpandingTextAreaMixin", [
	"dojo/_base/kernel",
	"..",
	"dojo/_base/declare", // dojo.declare
	"dojo/_base/html", // dojo.create
	"dojo/_base/lang", // dojo.hitch
	"dojo/_base/window" // dojo.body
], function(dojo, dijit){

	// module:
	//		dijit/form/_ExpandingTextAreaMixin
	// summary:
	//		Mixin for textarea widgets to add auto-expanding capability

	// feature detection
	var needsHelpShrinking;

	dojo.declare("dijit.form._ExpandingTextAreaMixin", null, {
		// summary:
		//		Mixin for textarea widgets to add auto-expanding capability

		_setValueAttr: function(){
			this.inherited(arguments);
			this.resize();
		},

		postCreate: function(){
			this.inherited(arguments);
			var textarea = this.textbox;

			if(needsHelpShrinking == undefined){
				var te = dojo.create('textarea', {rows:"5", cols:"20", value: ' ', style: {zoom:1, overflow:'hidden', visibility:'hidden', position:'absolute', border:"0px solid black", padding:"0px"}}, dojo.body(), "last");
				needsHelpShrinking = te.scrollHeight >= te.clientHeight;
				dojo.body().removeChild(te);
			}
			this.connect(textarea, "onscroll", "_resizeLater");
			this.connect(textarea, "onresize", "_resizeLater");
			this.connect(textarea, "onfocus", "_resizeLater");
			textarea.style.overflowY = "hidden";
			this._estimateHeight();
			this._resizeLater();
		},

		_onInput: function(e){
			this.inherited(arguments);
			this.resize();
		},

		_estimateHeight: function(){
			// summary:
			// 		Approximate the height when the textarea is invisible with the number of lines in the text.
			// 		Fails when someone calls setValue with a long wrapping line, but the layout fixes itself when the user clicks inside so . . .
			// 		In IE, the resize event is supposed to fire when the textarea becomes visible again and that will correct the size automatically.
			//
			var textarea = this.textbox;
			textarea.style.height = "auto";
			// #rows = #newlines+1
			// Note: on Moz, the following #rows appears to be 1 too many.
			// Actually, Moz is reserving room for the scrollbar.
			// If you increase the font size, this behavior becomes readily apparent as the last line gets cut off without the +1.
			textarea.rows = (textarea.value.match(/\n/g) || []).length + 2;
		},

		_resizeLater: function(){
			setTimeout(dojo.hitch(this, "resize"), 0);
		},

		resize: function(){
			// summary:
			//		Resizes the textarea vertically (should be called after a style/value change)
			function textareaScrollHeight(){
				var empty = false;
				if(textarea.value === ''){
					textarea.value = ' ';
					empty = true;
				}
				var sh = textarea.scrollHeight;
				if(empty){ textarea.value = ''; }
				return sh;
			}

			var textarea = this.textbox;
			if(textarea.style.overflowY == "hidden"){ textarea.scrollTop = 0; }
			if(this.resizeTimer){ clearTimeout(this.resizeTimer); }
			this.resizeTimer = null;
			if(this.busyResizing){ return; }
			this.busyResizing = true;
			if(textareaScrollHeight() || textarea.offsetHeight){
				var currentHeight = textarea.style.height;
				if(!(/px/.test(currentHeight))){
					currentHeight = textareaScrollHeight();
					textarea.rows = 1;
					textarea.style.height = currentHeight + "px";
				}
				var newH = Math.max(parseInt(currentHeight) - textarea.clientHeight, 0) + textareaScrollHeight();
				var newHpx = newH + "px";
				if(newHpx != textarea.style.height){
					textarea.rows = 1;
					textarea.style.height = newHpx;
				}
				if(needsHelpShrinking){
					var scrollHeight = textareaScrollHeight();
					textarea.style.height = "auto";
					if(textareaScrollHeight() < scrollHeight){ // scrollHeight can shrink so now try a larger value
						newHpx = newH - scrollHeight + textareaScrollHeight() + "px";
					}
					textarea.style.height = newHpx;
				}
				textarea.style.overflowY = textareaScrollHeight() > textarea.clientHeight ? "auto" : "hidden";
			}else{
				// hidden content of unknown size
				this._estimateHeight();
			}
			this.busyResizing = false;
		},

		destroy: function(){
			if(this.resizeTimer){ clearTimeout(this.resizeTimer); }
			if(this.shrinkTimer){ clearTimeout(this.shrinkTimer); }
			this.inherited(arguments);
		}
	});

	return dijit.form._ExpandingTextAreaMixin;
});