/*
 * String.trimLeft.js
 * 
 * Copyright (c) 2012 Tomasz Jakub Rup <tomasz.rup@gmail.com>
 *
 * https://github.com/tomi77/Date.toLocaleFormat/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

if (!String.trimLeft) {
	/**
	 * Return a inew string without leading whitespace.
	 * 
	 * @return string
	 */
	String.prototype.trimLeft = function() {
		return this.replace(/^\s*(.*?)$/gm, '$1');
	}
}
