export class Numbers {

  constructor(value) {
    this._value = value;
  }

  static parseEnvValue(value) {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error(`❌ Value "${value}" is not a valid number`);
    }
    return new Numbers(parsedValue);
  }

  isInt() {
    if (typeof this._value === 'number' && Number.isInteger(this._value)) {
      return this;
    } else {
      throw new Error('❌ Value is not integer');
    }
  }

  isBigInt() {
    if (typeof this._value === 'bigint') {
      return this;
    } else {
      throw new Error('❌ Value is not bigint');
    }
  }

  isFloat() {
    if (typeof this._value === 'number' && !Number.isInteger(this._value)) {
      return this;
    } else {
      throw new Error('❌ Value is not float');
    }
  }

  isPositive() {
    if (typeof this._value === 'number' && this._value > 0) {
      return this;
    } else {
      throw new Error('❌ Value is not positive (>)');
    }
  }

  isNonNegative() {
    if (typeof this._value === 'number' && this._value >= 0) {
      return this;
    } else {
      throw new Error('❌ Value is not non-negative (>=)');
    }
  }

  isNegative() {
    if (typeof this._value === 'number' && this._value < 0) {
      return this;
    } else {
      throw new Error('❌ Value is not negative (<)');
    }
  }

  isNonPositive() {
    if (typeof this._value === 'number' && this._value <= 0) {
      return this;
    } else {
      throw new Error('❌ Value is not non-positive (<=)');
    }
  }

  isNaN() {
    if (isNaN(this._value)) {
      return this;
    } else {
      throw new Error('❌ Value is not NaN');
    }
  }

  isInfinity() {
    if (this._value === Infinity || this._value === -Infinity) {
      return this;
    } else {
      throw new Error('❌ Value is not Infinity');
    }
  }

  getValue() {
    return this._value;
  }
}
