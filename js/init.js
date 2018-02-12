function get(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function getByURL(variable, query)
{
       var vars = query.split("?");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

//Google Analytics

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
  ga('create', 'UA-92533032-1', 'auto'); //Science Tracker
  ga('create', 'UA-43230779-1', 'ziondevelopers.github.io'); //Dathus Tracker
  ga('send', 'pageview');
  ga('ziondevelopers.github.io', 'pageview');

jwplayer.key = "lmwviL3c55Ymnx4fMjEUQeiU00zeXf6TCiDHQA==";

// Get URL
var url = unescape(get("url"));

// Youtube API Fallback
/*
window.onYouTubeIframeAPIReady = function() {
	window.jwplayer = new YT.Player("player", {
		"width": window.innerWidth,
		"height": window.innerHeight,
		videoId: getByURL("v", url),
		playerVars: {
			controls: 0,
			autoplay: 1,
			showinfo: 0,
			iv_load_policy: 3,
			autohide: 0,
			rel: "0",
			wmode: "opaque",
			modestbranding: 1,
			//nohtml5: 1
		}
	});
	
	jwplayer.pause = jwplayer.pauseVideo
	jwplayer.play = jwplayer.playVideo
}
*/
$(document).ready(function () {	
	// Check for URL
	if (url != "false") {
		// Uncomment For Youtube API Fallack
		//if (url.indexOf("youtube.com") === -1) {
			/** Initialize player **/
			jwplayer("player").setup({
			  "aspectratio": "auto",
			  "autostart": true,
			  "controls": true,
			  "displaydescription": false,
			  "displaytitle": true,	    
			  "file": url,
			  "preload": "auto",
			  "primary": "flash", // Use HTML5 As Primary To Have Native YouTube WebM HTML5 Support, Flash Fallback For Other Content
			  "repeat": false,
			  "loop": false,
			  "stagevideo": false,
			  "stretching": "uniform",
			  "visualplaylist": false, 
			  "width": window.innerWidth,
			  "height": window.innerHeight
			});
		//}
	}
});
