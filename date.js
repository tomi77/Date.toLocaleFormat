if(Date.toLocaleFormat==undefined) {
	Date.prototype.toLocaleFormat = function(formatString) {
		function extend(str){
			return (String(str).length == 1) ? "0"+String(str) : String(str);
		}
		return formatString
			.replace('%Y', this.getFullYear())
			.replace('%m', extend(this.getMonth()+1))
			.replace('%d', extend(this.getDate()))
			.replace('%H', extend(this.getHours()))
			.replace('%M', extend(this.getMinutes()))
			.replace('%S', extend(this.getSeconds()));
	}
}