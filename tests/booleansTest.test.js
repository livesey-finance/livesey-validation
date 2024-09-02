import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { Booleans } from '../src/booleans.js';

test('Booleans.parseEnvValue() should parse "true" correctly', () => {
  const result = Booleans.parseEnvValue('true').isBoolean().isTrue().getValue();
  assert.strictEqual(result, true);
});

test('Booleans.parseEnvValue() should parse "false" correctly', () => {
  const result = Booleans.parseEnvValue('false').isBoolean().isFalse().getValue();
  assert.strictEqual(result, false);
});

test('Booleans.parseEnvValue() should parse "True" case-insensitively', () => {
  const result = Booleans.parseEnvValue('True').isBoolean().isTrue().getValue();
  assert.strictEqual(result, true);
});

test('Booleans.parseEnvValue() should parse "FALSE" case-insensitively', () => {
  const result = Booleans.parseEnvValue('FALSE').isBoolean().isFalse().getValue();
  assert.strictEqual(result, false);
});

test('Booleans.parseEnvValue() should throw an error for invalid boolean value', () => {
  assert.throws(() => {
    Booleans.parseEnvValue('not-boolean').isBoolean().getValue();
  }, new Error('❌ Value "not-boolean" cannot be parsed to boolean'));
});

test('Booleans.parseEnvValue() should throw an error when "true" is checked with isFalse()', () => {
  assert.throws(() => {
    Booleans.parseEnvValue('true').isFalse().getValue();
  }, new Error('❌ Value is not false'));
});

