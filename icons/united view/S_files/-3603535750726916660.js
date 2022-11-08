
/*---
/js/bs/ua.js
---*/
(function(){var b=[document.documentElement.className,"ua-js"];var a=window.navigator.userAgent.toLowerCase();if(a.indexOf("mac")>-1){b.push("ua-mac");}else{if(a.indexOf("windows")!==-1&&a.indexOf("chrome")!==-1){b.push("ua-win-chrome");}}document.documentElement.className=b.join(" ");})();