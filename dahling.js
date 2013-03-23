
/*
 *
 * dahling.js
 *
 * It's just media dahling...
 *
 */

var dahling = (function(){
 
    var div;
	
	return function(query){
		if (!div){
			div = document.createElement("div");
			div.id = "dahling";
			div.style.cssText = "position:absolute;top:-1000px";
			document.body.insertBefore(div, document.body.firstChild);			
		}
	
		div.innerHTML = "_<style media=\"" + query + "\"> #dahling { width: 1px; }</style>";
		div.removeChild(div.firstChild);
		return div.offsetWidth == 1;	
	};
})();
 
/*
 * Simple dahling usage - just pass in a CSS media query.
 *
 *	if (isMedia("screen and (max-width:800px)"){
 *	    //do something for the screen dahling
 *	}
 *	 
 *	if (isMedia("all and (orientation:portrait)")){
 *	    //react to portrait mode dahling
 *	}
 *
 */


    function loadJS(jsname,pos) {
    var th = document.getElementsByTagName(pos)[0];
    var s = document.createElement('script');
    s.setAttribute('type','text/javascript');
    s.setAttribute('src',jsname);
    th.appendChild(s);
    }

/*
 * Ulterior motive and usage dahling:
 *
 *	if (dahling("screen and (max-width:481px)"){
 *	    //do something for gods sake
 *	        console.log("Less than 481px");
 *		loadJS('mobile.js','body');
 *	}
 *
 *
 */