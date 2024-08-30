import { Dates } from './src/dates.js';

try {
  console.log(Dates.parseEnvValue('2024-08-30').isValidDate().isFormat('YYYY-MM-DD').getValue()); // '2024-08-30'
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Dates.parseEnvValue('08/30/2024', 'MM/DD/YYYY').isValidDate().isFormat('MM/DD/YYYY').getValue()); // '08/30/2024'
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Dates.parseEnvValue('30-08-2024', 'DD-MM-YYYY').isValidDate().isFormat('DD-MM-YYYY').getValue()); // Fail: ❌ Value is not a valid date
} catch (error) {
  console.error(error.message);
}


try {
  console.log(Dates.parseEnvValue('2024-08-30').isBefore('2025-01-01').getValue()); // '2024-08-30'
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Dates.parseEnvValue('2024-08-30').isAfter('2023-01-01').getValue()); // '2024-08-30'
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Dates.parseEnvValue('2024-08-30').isInRange('2024-01-01', '2024-12-31').getValue()); // '2024-08-30'
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Dates.parseEnvValue('2024/08/30').isFormat('YYYY-MM-DD').getValue()); // Fail: ❌ Value "2024/08/30" does not match the format YYYY-MM-DD
} catch (error) {
  console.error(error.message);
}
