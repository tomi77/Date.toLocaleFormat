/*
 * Date.isLeapYear.js
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
 * Checks if the year is a leap year.
 * 
 * @return true if year is a leap year; false otherwise
 */
Date.prototype.isLeapYear = function() {
	var year = this.getFullYear();
	return !(year % 4) && (year % 100) || !(year % 400);
}
