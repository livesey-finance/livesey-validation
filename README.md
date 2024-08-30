<a name="readme-top"></a>
# 🧙‍♂️ livesey-validation 🧙‍♂️

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

## 🖊️ Description

`livesey-validation` is a lightweight and simple JavaScript module designed for data validation. It provides essential utilities for validating common data types such as booleans, dates, numbers, and strings. Ideal for environments where data validation is crucial, such as form validation or data processing tasks.

## 📌 Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
   - [Booleans](#booleans)
   - [Dates](#dates)
   - [Numbers](#numbers)
   - [Strings](#strings)
3. [API Documentation](#api-documentation)
   - [Booleans](#booleans-1)
   - [Dates](#dates-1)
   - [Numbers](#numbers-1)
   - [Strings](#strings-1)
4. [Contributing](#contributing)
5. [License](#license)
6. [Authors and Contacts](#authors-and-contacts)

## Installation

To install the `livesey-validation` module, use npm:

```bash
npm install livesey-validation
```

## Usage

### Booleans

```js
import { Booleans } from 'livesey-validation';

try {
  console.log(Booleans.parseEnvValue('true').isBoolean().isTrue().getValue()); // true
} catch (error) {
  console.error(error.message);
}
```

### Dates

```js
import { Dates } from 'livesey-validation';

try {
  console.log(Dates.parseEnvValue('2024-08-30').isValidDate().isFormat('YYYY-MM-DD').getValue()); // '2024-08-30'
} catch (error) {
  console.error(error.message);
}
```

### Numbers
```js
import { Numbers } from 'livesey-validation';

try {
  console.log(Numbers.parseEnvValue('42').isInt().isNonNegative().getValue()); // 42
} catch (error) {
  console.error(error.message);
}
```

### Strings

```js
import { Strings } from 'livesey-validation';

try {
  console.log(Strings.isEmail('valid.email@example.com').max(30).getValue()); // Pass: Valid email
} catch (error) {
  console.error(error.message);
}
```
## API Documentation

### Booleans

+ `Booleans.parseEnvValue(value: string): Booleans`

  Parses a string value to a boolean. Throws an error if the value is not "true" or "false".

+ `isBoolean(): Boolean`

  Validates that the internal value is a boolean.

+ `isTrue(): Booleans`

  Validates that the internal value is true.

+ `isFalse(): Booleans`

  Validates that the internal value is false.

+ `getValue(): boolean`

  Returns the internal boolean value.

### Dates
  
+ `Dates.parseEnvValue(value: string, format: string = 'YYYY-MM-DD'): Dates`

  Parses a string value into a date and checks it against the specified format.

+ `isValidDate(): Dates`

  Validates that the internal value is a valid date.

+ `isFormat(format: string): Dates`

  Validates that the date matches the specified format.

+ `isBefore(date: string): Dates`

  Validates that the internal date is before the specified date.

+ `isAfter(date: string): Dates`

  Validates that the internal date is after the specified date.

+ `isInRange(startDate: string, endDate: string): Dates`

  Validates that the internal date is within the specified date range.

+ `getValue(): string`

  Returns the internal date string.


### Numbers

+ `Numbers.parseEnvValue(value: string | number): Numbers`

  Parses a value to a number. Throws an error if the value cannot be parsed.

+ `isInt(): Numbers`

  Validates that the internal value is an integer.

+ `isBigInt(): Numbers`

  Validates that the internal value is a BigInt.

+ `isFloat(): Numbers`

  Validates that the internal value is a floating-point number.

+ `isPositive(): Numbers`

  Validates that the internal number is positive.

+ `isNonNegative(): Numbers`

Validates that the internal number is non-negative.

+ `isNegative(): Numbers`

Validates that the internal number is negative.

+ `isNonPositive(): Numbers`

Validates that the internal number is non-positive.

+ `isNaN(): Numbers`

Validates that the internal value is NaN.

+ `isInfinity(): Numbers`

Validates that the internal value is Infinity.

+ `getValue(): number`

Returns the internal number value.

### Strings

+ `Strings.isString(value: string): Strings`

Validates that the value is a string.

+ `min(length: number): Strings`

Validates that the string's length is at least the specified length.

+ `max(length: number): Strings`

Validates that the string's length is no more than the specified length.

+ `exactly(length: number): Strings`

Validates that the string's length is exactly the specified length.

+ `isEmail(value: string): Strings`

Validates that the string is a valid email address.

+ `isUrl(value: string): Strings`

Validates that the string is a valid URL.

+ `isIp(value: string): Strings`

Validates that the string is a valid IP address.

+ `isPhone(value: string): Strings`

Validates that the string is a valid phone number.

+ `isUUID(value: string): Strings`

Validates that the string is a valid UUID.

+ `isTime(value: string): Strings`

Validates that the string is a valid time in the format HH.

+ `getValue(): string`

Returns the internal string value.

## Contributing

We welcome contributions! If you encounter any bugs or have suggestions for improvements, please open an issue on GitHub.

### Reporting Issues

If you find a bug, please report it by opening an issue [here]().

### Code of Conduct

Please adhere to our [Code of Conduct]() when contributing.

## License

This project is licensed under the MIT License - see the [LICENSE]() file for details.

## Authors and Contacts
* `Heorhii Huziuk` - Lead Developer - huziukwork@gmail.com

  Special thanks to everyone who contributed to this project!❤️
