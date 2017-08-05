/**
 * Globalize Runtime v@VERSION
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: @DATE
 */
/*!
 * Globalize Runtime v@VERSION @DATE Released under the MIT license
 * http://git.io/TrdQbw
 */
/* globals global, localizeGlobalNamespace, process, window */
if ("undefined" !== typeof process && "node" === process.release.name) {
  global.localizeGlobalNamespace = global;
} else {
  window.localizeGlobalNamespace = window;
}
(function( root, factory ) {
  root.TabGlobalize = factory();
}(localizeGlobalNamespace, function() {

"use strict";
