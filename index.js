import { Numbers } from './src/numbers.js';

try {
  console.log(Numbers.parseEnvValue(12).isInt().isNonNegative().getValue()); // 42
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Numbers.parseEnvValue('42').isInt().isNonNegative().getValue()); // 42
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Numbers.parseEnvValue(3.14).isFloat().isPositive().getValue()); // 3.14
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Numbers.parseEnvValue(-10).isInt().isNegative().getValue()); // -10
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Numbers.parseEnvValue(123n).isBigInt().getValue()); // 123n (Fail, will throw an error)
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Numbers.parseEnvValue(Infinity).isInfinity().getValue()); // Infinity
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Numbers.parseEnvValue(NaN).isNaN().getValue()); // NaN (Fail, will throw an error)
} catch (error) {
  console.error(error.message);
}
