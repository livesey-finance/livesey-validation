import { RegExps } from './regexp/regexp.js';

export class Strings {

  constructor(value) {
    this._value = value;
  }

  static isString(value) {
    if (typeof value === 'string') {
      return new Strings(value);
    } else {
      throw new Error('❌ Value is not string');
    }
  }

  min(length) {
    if (this._value.length >= length) {
      return this;
    } else {
      throw new Error(`❌ minimal length must be ${length}`);
    }
  }

  max(length) {
    if (this._value.length <= length) {
      return this;
    } else {
      throw new Error(`❌ maximal length must be ${length}`);
    }
  }

  exactly(length) {
    if (this._value.length === length) {
      return this;
    } else {
      throw new Error(`❌ exact length must be ${length}`);
    }
  }

  static isEmail(value) {
    const regexp = RegExps.EMAIL;
    if (typeof value === 'string' && regexp.test(value)) {
      return new Strings(value);
    } else {
      throw new Error('❌ Value is not email');
    }
  }

  static isUrl(value) {
    const regexp = RegExps.URL;
    if (typeof value === 'string' && regexp.test(value)) {
      return new Strings(value);
    } else {
      throw new Error('❌ Value is not url');
    }
  }

  static isIp(value) {
    const regexp = RegExps.IP;
    if (typeof value === 'string' && regexp.test(value)) {
      return new Strings(value);
    } else {
      throw new Error('❌ Value is not ip');
    }
  }

  static isPhone(value) {
    const regexp = RegExps.MOBILE_PHONE;
    if (typeof value === 'string' && regexp.test(value)) {
      return new Strings(value);
    } else {
      throw new Error('❌ Value is not mobile phone');
    }
  }

  static isUUID(value) {
    const regexp = RegExps.UUID;
    if (typeof value === 'string' && regexp.test(value)) {
      return new Strings(value);
    } else {
      throw new Error('❌ Value is not mobile UUID');
    }
  }

  static isTime(value) {
    const regexp = RegExps.TIME;
    if (typeof value === 'string' && regexp.test(value)) {
      return new Strings(value);
    } else {
      throw new Error('❌ Value is not mobile UUID');
    }
  }
}
