// Arabic Wikipedia Fonts Improvements
// 2009-09-14
// Copyright (c) 2009, Khaled Al Hourani - khaled@holooli.com
// Version 1.4
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
// --------------------------------------------------------------------
// WHAT IT DOES:
// Replaces Arabic Wikipedia fonts faces and sizes for better reading
// --------------------------------------------------------------------
// ==UserScript==
// @name            Arabic Wikipedia Fonts Improvements
// @description     Replaces Arabic Wikipedia fonts faces and sizes for better reading
// @include         *ar.wikipedia.org/*
// ==/UserScript==

var body = document.getElementById('bodyContent');

styleIt('p');
styleIt('ul');

function styleIt(tag) {
  var element = body.getElementsByTagName(tag);

  for (var i = 0; i < element.length; i++) {
    element[i].style.fontFamily = 'Tahoma, arial, sans serif';
    element[i].style.lineHeight = '1.7em';
  }
}