import { Strings } from './src/strings.js';

try {
  console.log(Strings.isEmail('valid.email@example.com').max(30)); // Pass: Valid email with max length 30
  console.log(Strings.isEmail('invalid.email.com')); // Fail: Invalid email (throws an error)
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Strings.isUrl('https://example.com').min(10)); // Pass: Valid URL with min length 10
  console.log(Strings.isUrl('ftp://short').max(20)); // Pass: Valid short URL with max length 20
  console.log(Strings.isUrl('invalid-url')); // Fail: Invalid URL (throws an error)
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Strings.isIp('192.168.0.1').exactly(11)); // Pass: Valid IPv4 with exact length 11
  console.log(Strings.isIp('::1')); // Pass: Valid IPv6
  console.log(Strings.isIp('invalid-ip')); // Fail: Invalid IP (throws an error)
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Strings.isPhone('+1234567890').min(10)); // Pass: Valid phone number with min length 10
  console.log(Strings.isPhone('12345').max(15)); // Fail: Too short phone number (throws an error)
  console.log(Strings.isPhone('invalid-phone')); // Fail: Invalid phone number (throws an error)
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Strings.isUUID('123e4567-e89b-12d3-a456-426614174000')); // Pass: Valid UUID
  console.log(Strings.isUUID('invalid-uuid')); // Fail: Invalid UUID (throws an error)
} catch (error) {
  console.error(error.message);
}

try {
  console.log(Strings.isTime('23:59').exactly(5)); // Pass: Valid time in HH:MM format with exact length 5
  console.log(Strings.isTime('24:00')); // Fail: Invalid time (throws an error)
  console.log(Strings.isTime('invalid-time')); // Fail: Invalid time format (throws an error)
} catch (error) {
  console.error(error.message);
}
