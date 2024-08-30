import { Strings } from './src/strings.js';

try {
  console.log(Strings.isEmail('valid.email@example.com').max(30).getValue()); // Pass: Valid email with max length 30
  console.log(Strings.isEmail('invalid.email.com').getValue()); // Fail: Invalid email (throws an error)
} catch (error) {
  console.error(error.message);
}
console.log('---------------');
try {
  console.log(Strings.isUrl('https://example.com').min(10).getValue()); // Pass: Valid URL with min length 10
  console.log(Strings.isUrl('ftp://short').max(20).getValue()); // Pass: Valid short URL with max length 20
  console.log(Strings.isUrl('invalid-url').getValue()); // Fail: Invalid URL (throws an error)
} catch (error) {
  console.error(error.message);
}
console.log('---------------');
try {
  console.log(Strings.isIp('192.168.0.1').exactly(11).getValue()); // Pass: Valid IPv4 with exact length 11
  console.log(Strings.isIp('::1').getValue()); // Pass: Valid IPv6
  console.log(Strings.isIp('invalid-ip').getValue()); // Fail: Invalid IP (throws an error)
} catch (error) {
  console.error(error.message);
}
console.log('---------------');
try {
  console.log(Strings.isPhone('+1234567890').min(10).getValue()); // Pass: Valid phone number with min length 10
  console.log(Strings.isPhone('12345').max(15).getValue()); // Fail: Too short phone number (throws an error)
  console.log(Strings.isPhone('invalid-phone').getValue()); // Fail: Invalid phone number (throws an error)
} catch (error) {
  console.error(error.message);
}
console.log('---------------');
try {
  console.log(Strings.isUUID('123e4567-e89b-12d3-a456-426614174000').getValue()); // Pass: Valid UUID
  console.log(Strings.isUUID('invalid-uuid').getValue()); // Fail: Invalid UUID (throws an error)
} catch (error) {
  console.error(error.message);
}
console.log('---------------');
try {
  console.log(Strings.isTime('23:59').exactly(5).getValue()); // Pass: Valid time in HH:MM format with exact length 5
  console.log(Strings.isTime('24:00').getValue()); // Fail: Invalid time (throws an error)
  console.log(Strings.isTime('invalid-time').getValue()); // Fail: Invalid time format (throws an error)
} catch (error) {
  console.error(error.message);
}
