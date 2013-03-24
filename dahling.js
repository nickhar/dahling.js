/*
 * dahling.js
 * Dahling, you couldn't just do this for me could you
 *
 * By Nick Harrison | @nickhar
 * https://github.com/nickhar/dahling.js
 *
 * License : GPLv2 & MIT
 * Forks, clones and contributions welcome
 *
 */

var dahling = (function(){
 
    var div;
	
    return function(query){
	    if (!div){
		    div = document.createElement("div");
		    div.id = "dahlingjs";
		    div.style.cssText = "position:absolute;top:-1000px";
		    document.body.insertBefore(div, document.body.firstChild);			
	    }
    
	    div.innerHTML = "_<style media=\"" + query + "\"> #dahlingjs { width: 1px; }</style>";
	    div.removeChild(div.firstChild);
	    return div.offsetWidth == 1;	
    
    };

})();



// file loader
    function load(filename)
    {


	if(filename.constructor == Array)
	{
		//console.log(filename);
    
    
	    for (index = 0; index < filename.length; ++index)
	    {
		//console.log(filename[index]);
    
    
	// Get file extension
	    var ext = filename[index].split('?')[0];
	    ext = ext.substr(ext.lastIndexOf('.')+1);
	    
	    if(ext == "js" || ext == "JS" || ext == "css" || ext == "CSS")
	    {
		filetype = ext;
    
	    
		if (filetype == "js") { //if filename is external JS file
		    var fileref = document.createElement('script')
		    fileref.setAttribute("type", "text/javascript")
		    fileref.setAttribute("src", filename[index])
		    //alert('called');
		}
		else if (filetype == "css") { //if filename is external CSS file
		    var fileref = document.createElement("link")
		    fileref.setAttribute("rel", "stylesheet")
		    fileref.setAttribute("type", "text/css")
		    fileref.setAttribute("href", filename[index])
		}
		if (typeof fileref != "undefined")
		    document.getElementsByTagName("head")[0].appendChild(fileref)
	    }
    
    
	}
    
    
    
    } else {
    
    
	    
	// Get single file extension
	    var ext = filename.split('?')[0];
	    ext = ext.substr(ext.lastIndexOf('.')+1);
	
	    if(ext == "js" || ext == "JS" || ext == "css" || ext == "CSS")
	    {
		filetype = ext;
    
	    
		if (filetype == "js") { //if filename is external JS file
		    var fileref = document.createElement('script')
		    fileref.setAttribute("type", "text/javascript")
		    fileref.setAttribute("src", filename)
		    //alert('called');
		}
		else if (filetype == "css") { //if filename is external CSS file
		    var fileref = document.createElement("link")
		    fileref.setAttribute("rel", "stylesheet")
		    fileref.setAttribute("type", "text/css")
		    fileref.setAttribute("href", filename)
		}
		if (typeof fileref != "undefined")
		    document.getElementsByTagName("head")[0].appendChild(fileref)
	    }
    
    }	
}
	
	