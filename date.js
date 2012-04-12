/*
 * Date.toLocaleFormat
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
		function extend(str, fill){
			if (typeof fill == 'undefined') fill = '0';
			return (String(str).length == 1) ? fill+String(str) : String(str);
		}
		return formatString
			.replace('%a', ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][this.getDay()])
			.replace('%A', ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][this.getDay()])
			.replace('%b', ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][this.getMonth()])
			.replace('%B', ['January','February','March','April','May','June','July','August','September','October','November','December'][this.getMonth()])
			.replace('%C', new String(this.getFullYear()).substr(0,2))
			.replace('%d', extend(this.getDate()))
			.replace('%D', extend(this.getMonth()+1)+'/'+extend(this.getDate())+'/'+new String(this.getFullYear()).substr(2))
			.replace('%e', extend(this.getMonth()+1),' ')
			.replace('%F', this.getFullYear()+'-'+extend(this.getMonth()+1)+'-'+extend(this.getDate()))
			.replace('%g', new String(this.getFullYear()).substr(2))
			.replace('%G', this.getFullYear())
			.replace('%H', extend(this.getHours()))
			.replace('%m', extend(this.getMonth()+1))
			.replace('%M', extend(this.getMinutes()))
			.replace('%n', '\\n')
			.replace('%p', ['AM','PM'][Math.floor(this.getHours()/12)])
			.replace('%R', extend(this.getHours())+':'+extend(this.getMinutes()))
			.replace('%S', extend(this.getSeconds()))
			.replace('%t', '\\t')
			.replace('%T', extend(this.getHours())+':'+extend(this.getMinutes())+':'+extend(this.getSeconds()))
			.replace('%x', extend(this.getMonth()+1)+'/'+extend(this.getDate())+'/'+this.getFullYear())
			.replace('%X', this.toLocaleTimeString())
			.replace('%y', new String(this.getFullYear()).substr(2))
			.replace('%Y', this.getFullYear())
			.replace('%%', '%');
	}
}
