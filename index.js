module.exports = class DateTime {
  
  constructor(initialValue = null) {
    this.date = this._dateFromInput(initialValue);
  }
  
  getDay() {
    return this.date.getDate();
  }
  
  getMonth() {
    return this.date.getMonth() + 1;
  }
  
  getYear() {
    return this.date.getFullYear();
  }
  
  getMillisecond() {
    return this.date.getMilliseconds();
  }
  
  getSecond() {
    return this.date.getSeconds();
  }
  
  getMinute() {
    return this.date.getMinutes();
  }
  
  getHour() {
    return this.date.getHours();
  }
  
  getTime(highPrecision = false) {
    let h = this.getHour();
    let m = this.getMinute();
    let s = this.getSecond();
    let ms = this.getMillisecond();
    
    return h+':'+m+':'+s+(highPrecision ? '.'+ms : '');
  }
  
  format(format) {
    // TODO
  }
  
  toSQL() {
    // TODO
  }
  
  _dateFromInput(input) {
    if (typeof input === 'object' &&
        input instanceof Date) {
      // Use object as is
      return input;
    }
    // Initialize from value
    return input ? new Date(input) : new Date();
  }
}
