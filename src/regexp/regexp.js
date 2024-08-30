export const RegExps = {
  // Regular expression for validating email addresses.
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // Regular expression for validating URLs (supports HTTP, HTTPS, FTP protocols).
  URL: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,

  // Regular expression for validating both IPv4 and IPv6 addresses.
  IP: /^(?:(?:\d{1,3}\.){3}\d{1,3}|\[?[A-Fa-f0-9:]+\]?)$/,

  // Regular expression for validating mobile phone numbers (international format).
  MOBILE_PHONE: /^\+\d{1,3}\s?\d{1,14}(\s?\d{1,13})?$/,

  // Regular expression for validating UUIDs (version 1-5).
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,

  // Regular expression for validating time in HH:MM format (24-hour clock).
  TIME: /^(?:[01]\d|2[0-3]):[0-5]\d$/
};
