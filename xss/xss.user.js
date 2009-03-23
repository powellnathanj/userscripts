// ==UserScript==
// @name          xss
// @namespace     http://www.nathanpowell.org
// @description   Send data crossdomain
// @author        Nathan Powell
// @homepage      http://www.nathanpowell.org
// @include       *
// @exclude       nathanpowell.org
// ==/UserScript==

// Change these to whatever you like
// I am using the Sinatra app you can find at:
// http://github.com/slaney/wherehaveyoubeen
var webserviceSend = 'http://wherehaveyoubeen.nathanpowell.org/here';
var jqueryurl      = 'http://wherehaveyoubeen.nathanpowell.org/js/jquery-latest.js';
var encodingurl    = 'http://wherehaveyoubeen.nathanpowell.org/js/urlEncode.js';

// Almost all of this was ruthelessly stolen with permission from:
// http://joanpiedra.com/jquery/greasemonkey/
var GM_JQ = document.createElement('script');
GM_JQ.src = jqueryurl;
GM_JQ.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_JQ);

// Also add the encoding stuff
var add_encoding = document.createElement('script');
add_encoding.src = encodingurl;
add_encoding.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(add_encoding);


function GM_wait() {
  if(typeof unsafeWindow.jQuery == 'undefined') { 
    window.setTimeout(GM_wait,100); 
  } else { 
    $ = unsafeWindow.jQuery; 
    runCode(); 
  }
}
GM_wait();

function runCode(){
  var data = $.URLEncode(window.location.href);
  $.ajax({
          type: 'GET',
          dataType: 'jsonp',
          url: webserviceSend,
          data: 'url=' + data,
          });
}
