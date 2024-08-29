export class Numbers {

  static parseEnvValue(value) {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error(`❌ Value "${value}" is not a valid number`);
    }
    return parsedValue;
  }

  static isInt(value) {
    if (typeof value === 'number' && Number.isInteger(value)) {
      return this;
    } else {
      throw new Error('❌ Value is not integer');
    }
  }

  static isBigInt(value) {
    if (typeof value.valueOf() === 'bigint') {
      return this;
    } else {
      throw new Error('❌ Value is not bigint');
    }
  }

  static isFloat(value) {
    if (typeof value === 'number' && !Number.isInteger(value)) {
      return this;
    } else {
      throw new Error('❌ Value is not float');
    }
  }

  static isPositive(value) {
    if (typeof value === 'number' && value > 0) {
      return this;
    } else {
      throw new Error('❌ Value is not positive (>)');
    }
  }

  static isNonNegative(value) {
    if (typeof value === 'number' && value >= 0) {
      return this;
    } else {
      throw new Error('❌ Value is not non-negative (>=)');
    }
  }

  static isNegative(value) {
    if (typeof value === 'number' && value < 0) {
      return this;
    } else {
      throw new Error('❌ Value is not negative (<)');
    }
  }

  static isNonPositive(value) {
    if (typeof value === 'number' && value >= 0) {
      return this;
    } else {
      throw new Error('❌ Value is not non-positive (<=)');
    }
  }

  static isNaN(value) {
    if (isNaN(value)) {
      return this;
    } else {
      throw new Error('❌ Value is not NaN');
    }
  }

  static isInfinity(value) {
    const parsedValue = this.parseEnvValue(value);
    if (parsedValue === Infinity || parsedValue === -Infinity) {
      return this;
    } else {
      throw new Error('❌ Value is not Infinity');
    }
  }
}
