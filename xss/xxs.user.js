// ==UserScript==
// @name          xxs
// @namespace     http://www.nathanpowell.org
// @description   xxs
// @author        Nathan Powell
// @homepage      http://www.nathanpowell.org
// @include       *
// ==/UserScript==

// Almost all of this was ruthelessly stolen with permission from:
// http://joanpiedra.com/jquery/greasemonkey/
var GM_JQ = document.createElement('script');
GM_JQ.src = 'http://wtfhaveubeen.nathanpowell.org/js/jquery-latest.js';
GM_JQ.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_JQ);

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
  $.ajax({
          type: 'GET',
          dataType: 'jsonp',
          url: 'http://wtfhaveubeen.nathanpowell.org/here',
          success: bai(),
          });
}

function bai(){
  console.log('ha!');
}
