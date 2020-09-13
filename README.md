# ADOFAI-WebModule
### What is this?
This is a web module everyone is free to use.
You can create a instance of an ADOFAI Custom map and edit them easily on the web!
This is based on Javascript.

If you do not know what ADOFAI is, it is a indie rythm game including a custom map editor and official levels.
You can check the game on Steam.

### How do I implement it?
You can only implement this in javascript file.

HTML file should look like:
```html
<!DOCTYPE HTML>
<head>
	<script src="./YourJsFile.js" type="module"></script>
</head>
```

Javascript file should look like (jQuery is not always needed) :
```js
import ADOFAI from "./ADOFAI-WebModule.js"
$(function() {
	var map = new ADOFAI(); // create a level instance.

	map.pathData.push(new ADOFAI.PathData("L")); // create a tile with code 'L'.
	map.settings.levelDesc = "Hello world!"; // change the setting of a level.
	map.actions.push(new ADOFAI.Action(0, "AddDecoration")); // create a action and push it.
})
```

### Documentation
[Click here](https://github.com/CrackThrough/ADOFAI-WebModule/wiki) or copy the link: https://github.com/CrackThrough/ADOFAI-WebModule/wiki
