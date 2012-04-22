/*
 * String.toInt.js
 * 
 * Copyright (c) 2012 Tomasz Jakub Rup <tomasz.rup@gmail.com>
 *
 * https://github.com/tomi77/Date.toLocaleFormat/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/**
 * Return a int representation of string.
 * 
 * @return int
 */
String.prototype.toInt = function() {
	return parseInt(this);
}
