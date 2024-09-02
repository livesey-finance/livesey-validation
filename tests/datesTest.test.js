import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { Dates } from '../src/dates.js';

// Testing valid date parsing with a standard format
test('Dates.parseEnvValue() should correctly parse a date string in "YYYY-MM-DD" format', () => {
  const result = Dates.parseEnvValue('2024-08-30').isValidDate().isFormat('YYYY-MM-DD').getValue();
  assert.strictEqual(result, '2024-08-30');
});

// Testing valid date parsing with an alternative format
test('Dates.parseEnvValue() should correctly parse a date string in "MM/DD/YYYY" format', () => {
  const result = Dates.parseEnvValue('08/30/2024', 'MM/DD/YYYY').isValidDate().isFormat('MM/DD/YYYY').getValue();
  assert.strictEqual(result, '08/30/2024');
});

// Testing an invalid date format to ensure error handling
test('Dates.parseEnvValue() should throw an error for an invalid date string in "DD-MM-YYYY" format', () => {
  assert.throws(() => {
    Dates.parseEnvValue('30-08-2024', 'DD-MM-YYYY').isValidDate().isFormat('DD-MM-YYYY').getValue();
  }, new Error('❌ Value is not a valid date'));
});

// Testing comparison of date against another date in the future
test('Dates.parseEnvValue() should validate that a date is before a given future date', () => {
  const result = Dates.parseEnvValue('2024-08-30').isBefore('2025-01-01').getValue();
  assert.strictEqual(result, '2024-08-30');
});

// Testing comparison of date against another date in the past
test('Dates.parseEnvValue() should validate that a date is after a given past date', () => {
  const result = Dates.parseEnvValue('2024-08-30').isAfter('2023-01-01').getValue();
  assert.strictEqual(result, '2024-08-30');
});

// Testing that a date falls within a specified range
test('Dates.parseEnvValue() should validate that a date is within a specific range', () => {
  const result = Dates.parseEnvValue('2024-08-30').isInRange('2024-01-01', '2024-12-31').getValue();
  assert.strictEqual(result, '2024-08-30');
});

// Testing for error when date format does not match the expected format
test('Dates.parseEnvValue() should throw an error when date format does not match "YYYY-MM-DD"', () => {
  assert.throws(() => {
    Dates.parseEnvValue('2024/08/30').isFormat('YYYY-MM-DD').getValue();
  }, new Error('❌ Value "2024/08/30" does not match the format YYYY-MM-DD'));
});

// Testing for error when date is not in the expected range
test('Dates.parseEnvValue() should throw an error if the date is outside the expected range', () => {
  assert.throws(() => {
    Dates.parseEnvValue('2023-12-31').isInRange('2024-01-01', '2024-12-31').getValue();
  }, new Error('❌ Date is not in the range 2024-01-01 - 2024-12-31'));
});

// `isEqualTo` is not implemented
// test('Dates.parseEnvValue() should validate that a date is exactly equal to another date', () => {
//   const result = Dates.parseEnvValue('2024-08-30').isEqualTo('2024-08-30').getValue();
//   assert.strictEqual(result, '2024-08-30');
// });

// Testing invalid date string to ensure proper error handling
test('Dates.parseEnvValue() should throw an error for a non-date string input', () => {
  assert.throws(() => {
    Dates.parseEnvValue('invalid-date').isValidDate().getValue();
  }, new Error('❌ Value "invalid-date" does not match the format YYYY-MM-DD'));
});
