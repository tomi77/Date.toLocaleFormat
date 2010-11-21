/**
 * @author Tomasz Jakub Rup <tomasz.rup@gmail.com>
 */

if(Date.toLocaleFormat==undefined) {
	Date.prototype.toLocaleFormat = function(formatString) {
		function extend(str, fill='0'){
			return (String(str).length == 1) ? fill+String(str) : String(str);
		}
		return formatString
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
			.replace('%R', extend(this.getHours())+':'+extend(this.getMinutes()))
			.replace('%S', extend(this.getSeconds()))
			.replace('%t', '\\t')
			.replace('%T', extend(this.getHours())+':'+extend(this.getMinutes())+':'+extend(this.getSeconds()))
			.replace('%y', new String(this.getFullYear()).substr(2))
			.replace('%Y', this.getFullYear())
			.replace('%%', '%');
	}
}
