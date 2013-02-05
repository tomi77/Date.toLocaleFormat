/*
 * Date.toLocaleFormat.js
 * 
 * Copyright (c) 2012 Tomasz Jakub Rup <tomasz.rup@gmail.com>
 *
 * https://github.com/tomi77/Date.toLocaleFormat/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

if (!Date.prototype.toLocaleFormat) {
	/**
	 * Converts a date to a string using the specified formatting.
	 * 
	 * The toLocaleFormat() provides greater software control over the formatting of the generated date and/or time.
	 * Names for months and days of the week are localized using the operating system's locale. However, ordering of
	 * the day and month and other localization tasks are not handled automatically since you have control over the
	 * order in which they occur. You should take care that the format string is localized properly according to the
	 * user's system settings. Be aware that the locale used is not necessarily the same as the locale of the browser.
	 * 
	 * @param formatString string A format string in the same format expected by the strftime() function in C.
	 */
	Date.prototype.toLocaleFormat = function(formatString) {
		var self = this;
		
		return formatString.replace(Date.prototype.toLocaleFormat.re, function(match, code, position, str) {
			if (match == '%%') return '%';
			else return Date.prototype.toLocaleFormat[code](self);
		});
	}
	
	Date.prototype.toLocaleFormat.re = /%%|%([aAbBcCdDeFgGhHkIjlmMnprRsStTxXyYzZ])/g;
	
	Date.prototype.toLocaleFormat.weekDayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	Date.prototype.toLocaleFormat.weekDayNamesShort = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	
	Date.prototype.toLocaleFormat.monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	Date.prototype.toLocaleFormat.monthNamesShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	
	Date.prototype.toLocaleFormat.extend = function(str, fill, max_len) {
		if (typeof fill == 'undefined') fill = '0';
		if (typeof max_len == 'undefined') max_len = 2;
		str = String(fill) + String(str);
		return str.substr(-max_len);
	}
	
	/**
	 * %a is replaced by the locale's abbreviated weekday name.
	 */
	Date.prototype.toLocaleFormat.a = function(d) {
		return Date.prototype.toLocaleFormat.weekDayNamesShort[d.getDay()];
	}
	/**
	 * %A is replaced by the locale's full weekday name.
	 */
	Date.prototype.toLocaleFormat.A = function(d) {
		return Date.prototype.toLocaleFormat.weekDayNames[d.getDay()];
	}
	/**
	 * %b and %h is replaced by the locale's abbreviated month name.
	 */
	Date.prototype.toLocaleFormat.b =
	Date.prototype.toLocaleFormat.h = function(d) {
		return Date.prototype.toLocaleFormat.monthNamesShort[d.getMonth()];
	}
	/**
	 * %B is replaced by the locale's full month name.
	 */
	Date.prototype.toLocaleFormat.B = function(d) {
		return Date.prototype.toLocaleFormat.monthNames[d.getMonth()];
	}
	/**
	 * %c is replaced by the locale's appropriate date and time representation.
	 */
	Date.prototype.toLocaleFormat.c = function(d) {
		return d.toLocaleString();
	}
	/**
	 * %C is replaced by the century number (the year divided by 100 and truncated to an integer) as a decimal number [00-99].
	 */
	Date.prototype.toLocaleFormat.C = function(d) {
		return new String(d.getFullYear()).substr(0,2);
	}
	/**
	 * %d is replaced by the day of the month as a decimal number [01,31].
	 */
	Date.prototype.toLocaleFormat.d = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getDate());
	}
	/**
	 * %D same as %m/%d/%y.
	 */
	Date.prototype.toLocaleFormat.D = function(d) {
		return d.toLocaleFormat('%m/%d/%y');
	}
	/**
	 * %e is replaced by the day of the month as a decimal number [1,31]; a single digit is preceded by a space.
	 */
	Date.prototype.toLocaleFormat.e = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getMonth()+1, ' ');
	}
	Date.prototype.toLocaleFormat.F = function(d) {
		return d.toLocaleFormat('%Y-%m-%d');
	}
	/**
	 * %y and %g is replaced by the year without century as a decimal number [00,99].
	 */
	Date.prototype.toLocaleFormat.g =
	Date.prototype.toLocaleFormat.y = function(d) {
		return new String(d.getFullYear()).substr(2);
	}
	/**
	 * %Y and %G is replaced by the year with century as a decimal number.
	 */
	Date.prototype.toLocaleFormat.G =
	Date.prototype.toLocaleFormat.Y = function(d) {
		return d.getFullYear();
	}
	/**
	 * %H and k is replaced by the hour (24-hour clock) as a decimal number [00,23].
	 */
	Date.prototype.toLocaleFormat.H = 
	Date.prototype.toLocaleFormat.k = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getHours());
	}
	/**
	 * %I is replaced by the hour (12-hour clock) as a decimal number [01,12].
	 */
	Date.prototype.toLocaleFormat.I = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getHours() % 12);
	}
	/**
	 * %j is replaced by the day of the year as a decimal number [001,366].
	 */
	Date.prototype.toLocaleFormat.j = function(d) {
		var n = 0;
		for (var i = 0; i < d.getMonth(); i++) {
			n += 30;
		}
		n += d.getDate();
	}
	/**
	 * %l is replaced by the hour (12-hour clock) as a decimal number [1,12]; a single digit is preceded by a space.
	 */
	Date.prototype.toLocaleFormat.l = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getHours() % 12, ' ');
	}
	/**
	 * %m is replaced by the month as a decimal number [01,12].
	 */
	Date.prototype.toLocaleFormat.m = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getMonth()+1);
	}
	/**
	 * %M is replaced by the minute as a decimal number [00,59].
	 */
	Date.prototype.toLocaleFormat.M = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getMinutes());
	}
	/**
	 * %n is replaced by a newline character.
	 */
	Date.prototype.toLocaleFormat.n = function() {
		return '\n';
	}
	/**
	 * %p is replaced by the locale's equivalent of either a.m. or p.m.
	 */
	Date.prototype.toLocaleFormat.p = function(d) {
		return ['AM','PM'][Math.floor(d.getHours()/12)];
	}
	/**
	 * %r is replaced by the time in a.m. and p.m. notation; in the POSIX locale this is equivalent to %I:%M:%S %p.
	 */
	Date.prototype.toLocaleFormat.r = function(d) {
		return d.toLocaleFormat('%I:%M:%S %p');
	}
	/**
	 * %R is replaced by the time in 24 hour notation (%H:%M).
	 */
	Date.prototype.toLocaleFormat.R = function(d) {
		return d.toLocaleFormat('%H:%M');
	}
	/**
	 * %s is replaced by the number of milliseconds since midnight Jan 1, 1970.
	 */
	Date.prototype.toLocaleFormat.s = function(d) {
		return new String(parseInt(d.getTime() / 1000));
	}
	/**
	 * %S is replaced by the second as a decimal number [00,61].
	 */
	Date.prototype.toLocaleFormat.S = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getSeconds());
	}
	/**
	 * %t is replaced by a tab character.
	 */
	Date.prototype.toLocaleFormat.t = function() {
		return '\t';
	}
	/**
	 * %T is replaced by the time (%H:%M:%S).
	 */
	Date.prototype.toLocaleFormat.T = function(d) {
		return d.toLocaleFormat('%H:%M:%S');
	}
	/**
	 * %u is replaced by the weekday as a decimal number [1,7], with 1 representing Monday.
	 */
	/**
	 * %U is replaced by the week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
	 */
	/**
	 * %V is replaced by the week number of the year (Monday as the first day of the week) as a decimal number [01,53].
	 * If the week containing 1 January has four or more days in the new year, then it is considered week 1. Otherwise,
	 * it is the last week of the previous year, and the next week is week 1.
	 */
	/**
	 * %w is replaced by the weekday as a decimal number [0,6], with 0 representing Sunday.
	 */
	/**
	 * %W is replaced by the week number of the year (Monday as the first day of the week) as a decimal number [00,53].
	 * All days in a new year preceding the first Monday are considered to be in week 0.
	 */
	/**
	 * %x is replaced by the locale's appropriate date representation.
	 */
	Date.prototype.toLocaleFormat.x = function(d) {
		return d.toLocaleDateString();
	}
	/**
	 * %X is replaced by the locale's appropriate time representation.
	 */
	Date.prototype.toLocaleFormat.X = function(d) {
		return d.toLocaleTimeString();
	}
	/**
	 * %z
	 */
	Date.prototype.toLocaleFormat.z = function(d) {
		return d.toString().match(/GMT([+-]\d{4})/)[1];
	}
	/**
	 * %Z is replaced by the timezone name or abbreviation, or by no bytes if no timezone information exists.
	 */
	Date.prototype.toLocaleFormat.Z = function(d) {
		return d.toString().match(/\((.*)\)$/)[1];
	}
}
