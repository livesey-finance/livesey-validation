import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { Strings } from '../src/strings.js';

// Testing valid email validation
test('Strings.isEmail() should validate a correct email and enforce max length', () => {
  const result = Strings.isEmail('valid.email@example.com').max(30).getValue();
  assert.strictEqual(result, 'valid.email@example.com');
});

// Testing invalid email validation
test('Strings.isEmail() should throw an error for an invalid email', () => {
  assert.throws(() => {
    Strings.isEmail('invalid.email.com').getValue();
  }, new Error('❌ Value is not email'));
});

// Testing valid URL with minimum length
test('Strings.isUrl() should validate a correct URL and enforce min length', () => {
  const result = Strings.isUrl('https://example.com').min(10).getValue();
  assert.strictEqual(result, 'https://example.com');
});

// Testing valid short URL with maximum length
test('Strings.isUrl() should validate a short URL and enforce max length', () => {
  const result = Strings.isUrl('ftp://short').max(20).getValue();
  assert.strictEqual(result, 'ftp://short');
});

// Testing invalid URL validation
test('Strings.isUrl() should throw an error for an invalid URL', () => {
  assert.throws(() => {
    Strings.isUrl('invalid-url').getValue();
  }, new Error('❌ Value is not url'));
});

// Testing valid IPv4 with exact length
test('Strings.isIp() should validate a correct IPv4 and enforce exact length', () => {
  const result = Strings.isIp('192.168.0.1').exactly(11).getValue();
  assert.strictEqual(result, '192.168.0.1');
});

// Testing valid IPv6 validation
test('Strings.isIp() should validate a correct IPv6', () => {
  const result = Strings.isIp('::1').getValue();
  assert.strictEqual(result, '::1');
});

// Testing invalid IP validation
test('Strings.isIp() should throw an error for an invalid IP', () => {
  assert.throws(() => {
    Strings.isIp('invalid-ip').getValue();
  }, new Error('❌ Value is not ip'));
});

// Testing valid phone number with minimum length
test('Strings.isPhone() should validate a correct phone number and enforce min length', () => {
  const result = Strings.isPhone('+1234567890').min(10).getValue();
  assert.strictEqual(result, '+1234567890');
});

// Testing too long phone number validation
test('Strings.isPhone() should throw an error for too long phone number', () => {
  assert.throws(() => {
    Strings.isPhone('+1234567891011121314151617').max(15).getValue();
  }, new Error('❌ maximal length must be 15'));
});

// Testing invalid phone number validation
test('Strings.isPhone() should throw an error for an invalid phone number', () => {
  assert.throws(() => {
    Strings.isPhone('invalid-phone').getValue();
  }, new Error('❌ Value is not mobile phone'));
});

// Testing valid UUID validation
test('Strings.isUUID() should validate a correct UUID', () => {
  const result = Strings.isUUID('123e4567-e89b-12d3-a456-426614174000').getValue();
  assert.strictEqual(result, '123e4567-e89b-12d3-a456-426614174000');
});

// Testing invalid UUID validation
test('Strings.isUUID() should throw an error for an invalid UUID', () => {
  assert.throws(() => {
    Strings.isUUID('invalid-uuid').getValue();
  }, new Error('❌ Value is not mobile UUID'));
});

// Testing valid time in HH:MM format with exact length
test('Strings.isTime() should validate a correct time in HH:MM format and enforce exact length', () => {
  const result = Strings.isTime('23:59').exactly(5).getValue();
  assert.strictEqual(result, '23:59');
});

// Testing invalid time (24:00) validation
test('Strings.isTime() should throw an error for an invalid time (24:00)', () => {
  assert.throws(() => {
    Strings.isTime('24:00').getValue();
  }, new Error('❌ Value is not mobile UUID'));
});

// Testing invalid time format validation
test('Strings.isTime() should throw an error for an invalid time format', () => {
  assert.throws(() => {
    Strings.isTime('invalid-time').getValue();
  }, new Error('❌ Value is not mobile UUID'));
});
