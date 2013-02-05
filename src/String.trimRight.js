/*
 * String.trimRight.js
 * 
 * Copyright (c) 2012 Tomasz Jakub Rup <tomasz.rup@gmail.com>
 *
 * https://github.com/tomi77/Date.toLocaleFormat/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

if (!String.prototype.trimRight) {
	/**
	 * Return a new string without trialing whitespace.
	 * 
	 * @return string
	 */
	String.prototype.trimRight = function() {
		return this.replace(/^(.*?)\s*$/gm, '$1');
	}
}
