/*
 * date.toLocaleFormat.js
 * 
 * Copyright (c) 2012 Tomasz Jakub Rup <tomasz.rup@gmail.com>
 *
 * https://github.com/tomi77/Date.toLocaleFormat/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

if (!Date.toLocaleFormat) {
	Date.prototype.toLocaleFormat = function(formatString) {
		var self = this;
		
		return formatString.replace(Date.prototype.toLocaleFormat.re, function(match, code, position, str) {
			if (match == '%%') return '%';
			else return Date.prototype.toLocaleFormat[code](self);
		});
	}
	
	Date.prototype.toLocaleFormat.re = /%%|%([aAbBCdDeFgGhHmMnprRStTxXyY])/g;
	
	Date.prototype.toLocaleFormat.weekDayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	Date.prototype.toLocaleFormat.weekDayNamesShort = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	
	Date.prototype.toLocaleFormat.monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	Date.prototype.toLocaleFormat.monthNamesShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	
	Date.prototype.toLocaleFormat.extend = function(str, fill) {
		if (typeof fill == 'undefined') fill = '0';
		return (String(str).length == 1) ? fill+String(str) : String(str);
	}
	
	Date.prototype.toLocaleFormat.a = function(d) {
		return Date.prototype.toLocaleFormat.weekDayNamesShort[d.getDay()];
	}
	Date.prototype.toLocaleFormat.A = function(d) {
		return Date.prototype.toLocaleFormat.weekDayNames[d.getDay()];
	}
	Date.prototype.toLocaleFormat.b
	Date.prototype.toLocaleFormat.h = function(d) {
		return Date.prototype.toLocaleFormat.monthNamesShort[d.getMonth()];
	}
	Date.prototype.toLocaleFormat.B = function(d) {
		return Date.prototype.toLocaleFormat.monthNames[d.getMonth()];
	}
	Date.prototype.toLocaleFormat.C = function(d) {
		return new String(d.getFullYear()).substr(0,2);
	}
	Date.prototype.toLocaleFormat.d = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getDate());
	}
	Date.prototype.toLocaleFormat.D = function(d) {
		return d.toLocaleFormat('%m/%d/%y');
	}
	Date.prototype.toLocaleFormat.e = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getMonth()+1, ' ');
	}
	Date.prototype.toLocaleFormat.F = function(d) {
		return d.toLocaleFormat('%Y-%m-%d');
	}
	Date.prototype.toLocaleFormat.g =
	Date.prototype.toLocaleFormat.y = function(d) {
		return new String(d.getFullYear()).substr(2);
	}
	Date.prototype.toLocaleFormat.G =
	Date.prototype.toLocaleFormat.Y = function(d) {
		return d.getFullYear();
	}
	Date.prototype.toLocaleFormat.H = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getHours());
	}
	Date.prototype.toLocaleFormat.m = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getMonth()+1);
	}
	Date.prototype.toLocaleFormat.M = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getMinutes());
	}
	Date.prototype.toLocaleFormat.n = function() {
		return '\n';
	}
	Date.prototype.toLocaleFormat.p = function(d) {
		return ['AM','PM'][Math.floor(d.getHours()/12)];
	}
	Date.prototype.toLocaleFormat.r = function(d) {
		return d.toLocaleFormat('%I:%M:%S %p');
	}
	Date.prototype.toLocaleFormat.R = function(d) {
		return d.toLocaleFormat('%H:%M');
	}
	Date.prototype.toLocaleFormat.S = function(d) {
		return Date.prototype.toLocaleFormat.extend(d.getSeconds());
	}
	Date.prototype.toLocaleFormat.t = function() {
		return '\t';
	}
	Date.prototype.toLocaleFormat.T = function(d) {
		return d.toLocaleFormat('%H:%M:%S');
	}
	Date.prototype.toLocaleFormat.x = function(d) {
		return d.toLocaleFormat('%m/%d/%Y');
	}
	Date.prototype.toLocaleFormat.X = function(d) {
		return d.toLocaleTimeString();
	}
}
