export class Booleans {
  constructor(value) {
    this._value = value;
  }

  static parseEnvValue(value) {
    const lowerCaseValue = value.toLowerCase();
    if (lowerCaseValue === 'true' || lowerCaseValue === 'false') {
      return new Booleans(lowerCaseValue === 'true');
    } else {
      throw new Error(`❌ Value "${value}" cannot be parsed to boolean`);
    }
  }

  isBoolean() {
    if (typeof this._value === 'boolean') {
      return this;
    } else {
      throw new Error('❌ Value is not boolean');
    }
  }

  isTrue() {
    if (this._value === true) {
      return this;
    } else {
      throw new Error('❌ Value is not true');
    }
  }

  isFalse() {
    if (this._value === false) {
      return this;
    } else {
      throw new Error('❌ Value is not false');
    }
  }

  getValue() {
    return this._value;
  }
}
