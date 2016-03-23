// ==UserScript==
// @name        nosTEAM noAD
// @namespace   http://nosteam.ro
// @description Remove UI-Blockers and Pop-up-triggerers in the nosTEAM website
// @downloadURL http://planetphoenix.github.io/nosTEAM_noAD.user.js
// @include     http://nosteam.ro/*
// @include     http://www.nosteam.ro/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @version     2.44
// @icon        data:image/png;base64,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
// @grant       none
// ==/UserScript==

$(document).ready(function(){
  window.open = function(){
    return;
  };
  
  setTimeout(function(){
    $('.BlockUI, #stickynote2, #stickynote1, #stickynote3, #stickynote4, #dialogoverlay, #dialogbox').remove();
  }, 50);
});
