dahling.js
==========

An ultra-simple and lightweight media query js loader


* Author    : Nick Harrison <<https://github.com/nickhar>>
* Home      : http://nickhar.github.com/dahling.js
* Source    : https://github.com/nickhar/dahling.js
* License   : GPLv2 & MIT

## Features
 
dahling.js provides two simple functions:

 1. It determines if the browser is currently in a particular media mode. Use the same media query as you would in CSS or in a `<link>` file.
 2. It provides the ability to load internal or external JS files.

## Methods

* `dahling()`
* `loadJS()`


## Examples

```html
<script type="text/javascript" src="dahling.js"></script>
<script type="text/javascript">

   if (dahling("screen and (max-width:800px)")){
      //do something for the screen
   }
	 
   if (dahling("all and (orientation:portrait)")){
      //react to portrait mode
   } 

   if (dahling("screen and (max-width:481px)")){
      
   // Load required JS file based on max-width
      loadJS('mobile.js','body');
      
   // Log notification to the console
      console.log("Less than 481px");
      
   // Alert the user
      alert("Less than 481px");
      
    }

</script>
```

## License

Copyright © 2010-2013 Nick Harrison <<https://github.com/nickhar>>

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to use, 
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the 
Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.
