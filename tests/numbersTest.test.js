import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { Numbers } from '../src/numbers.js';

// Testing integer parsing and non-negative validation
test('Numbers.parseEnvValue() should correctly parse an integer and validate it as non-negative', () => {
  const result = Numbers.parseEnvValue(12).isInt().isNonNegative().getValue();
  assert.strictEqual(result, 12);
});

// Testing string parsing to integer and non-negative validation
test('Numbers.parseEnvValue() should correctly parse a string to integer and validate it as non-negative', () => {
  const result = Numbers.parseEnvValue('42').isInt().isNonNegative().getValue();
  assert.strictEqual(result, 42);
});

// Testing float parsing and positive validation
test('Numbers.parseEnvValue() should correctly parse a float and validate it as positive', () => {
  const result = Numbers.parseEnvValue(3.14).isFloat().isPositive().getValue();
  assert.strictEqual(result, 3.14);
});

// Testing integer parsing and negative validation
test('Numbers.parseEnvValue() should correctly parse a negative integer and validate it as negative', () => {
  const result = Numbers.parseEnvValue(-10).isInt().isNegative().getValue();
  assert.strictEqual(result, -10);
});

// Testing BigInt parsing should fail and throw an error
test('Numbers.parseEnvValue() should throw an error when trying to validate BigInt', () => {
  assert.throws(() => {
    Numbers.parseEnvValue(123n).isBigInt().getValue();
  }, new Error('❌ Value is not bigint'));
});

// Testing Infinity validation
test('Numbers.parseEnvValue() should correctly parse Infinity and validate it as Infinity', () => {
  const result = Numbers.parseEnvValue(Infinity).isInfinity().getValue();
  assert.strictEqual(result, Infinity);
});

// Testing NaN validation should pass if class allows NaN
test('Numbers.parseEnvValue() should correctly parse NaN and validate it as NaN', () => {
  const result = Numbers.parseEnvValue(NaN).isNaN().getValue();
  assert.strictEqual(isNaN(result), true);
});

// Testing invalid number string parsing should fail and throw an error
test('Numbers.parseEnvValue() should throw an error when parsing a non-numeric string', () => {
  assert.throws(() => {
    Numbers.parseEnvValue('abc').isInt().getValue();
  }, new Error('❌ Value is not integer'));
});

// Testing non-integer float parsed as integer should throw an error
test('Numbers.parseEnvValue() should throw an error when a float is validated as integer', () => {
  assert.throws(() => {
    Numbers.parseEnvValue(3.14).isInt().getValue();
  }, new Error('❌ Value is not integer'));
});

// Testing negative integer validated as non-negative should throw an error
test('Numbers.parseEnvValue() should throw an error when a negative integer is validated as non-negative', () => {
  assert.throws(() => {
    Numbers.parseEnvValue(-10).isNonNegative().getValue();
  }, new Error('❌ Value is not non-negative (>=)'));
});
