export class Dates {
  constructor(value) {
    this._value = value;
  }

  static parseEnvValue(value, format = 'YYYY-MM-DD') {
    const formats = {
      'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/,
      'MM/DD/YYYY': /^\d{2}\/\d{2}\/\d{4}$/,
      'DD-MM-YYYY': /^\d{2}-\d{2}-\d{4}$/
    };

    if (formats[format].test(value)) {
      return new Dates(value);
    } else {
      throw new Error(`❌ Value "${value}" does not match the format ${format}`);
    }
  }

  isValidDate() {
    const date = new Date(this._value);
    if (!isNaN(date.getTime())) {
      return this;
    } else {
      throw new Error('❌ Value is not a valid date');
    }
  }

  isFormat(format) {
    const formats = {
      'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/,
      'MM/DD/YYYY': /^\d{2}\/\d{2}\/\d{4}$/,
      'DD-MM-YYYY': /^\d{2}-\d{2}-\d{4}$/
    };

    if (formats[format].test(this._value)) {
      return this;
    } else {
      throw new Error(`❌ Value does not match the format ${format}`);
    }
  }

  isBefore(date) {
    const currentDate = new Date(this._value);
    const compareDate = new Date(date);

    if (currentDate < compareDate) {
      return this;
    } else {
      throw new Error(`❌ Date is not before ${date}`);
    }
  }

  isAfter(date) {
    const currentDate = new Date(this._value);
    const compareDate = new Date(date);

    if (currentDate > compareDate) {
      return this;
    } else {
      throw new Error(`❌ Date is not after ${date}`);
    }
  }

  isInRange(startDate, endDate) {
    const currentDate = new Date(this._value);
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (currentDate >= start && currentDate <= end) {
      return this;
    } else {
      throw new Error(`❌ Date is not in the range ${startDate} - ${endDate}`);
    }
  }

  getValue() {
    return this._value;
  }
}
