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
 
    function loadJS(jsname,pos) {
	var th = document.getElementsByTagName(pos)[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
    }