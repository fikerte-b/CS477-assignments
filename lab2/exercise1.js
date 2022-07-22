/**
 * 1. Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address.
 *    (Search and learn 'dns' module, resolve4)
 */
const dns = require("dns");

dns.resolve4("www.miu.edu", true, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});