import { Booleans } from './src/booleans.js';

try {
  console.log(Booleans.parseEnvValue('true').isBoolean().isTrue().getValue()); // true
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Booleans.parseEnvValue('false').isBoolean().isFalse().getValue()); // false
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Booleans.parseEnvValue('True').isBoolean().isTrue().getValue()); // true (case-insensitive)
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Booleans.parseEnvValue('FALSE').isBoolean().isFalse().getValue()); // false (case-insensitive)
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Booleans.parseEnvValue('not-boolean').isBoolean().getValue()); // Fail: 'not-boolean' cannot be parsed to boolean
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Booleans.parseEnvValue('true').isFalse().getValue()); // Fail: true is not false
} catch (error) {
  console.error(error.message);
}
