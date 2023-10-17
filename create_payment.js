var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://connect.squareupsandbox.com/v2/payments',
  'headers': {
    'Square-Version': '2023-09-25',
    'Authorization': 'Bearer EAAAEMFMcw4cRm3o5A4HBPxEy8mrGmMVSWtpuwXdfFSWPOW2EEMhOaBMivwoa7Rx',
    'Content-Type': 'application/json',
    'Cookie': '__cf_bm=2Dl1UM3C4dggpHM9e9PdnJ47abCb_FFK2E7lUHFwwlY-1696890225-0-AWmD+V7+4wbcs+awg8P5utgwTvURIoRXM5jsLxxt+vnxds4y27Uq80i7VJg9NEvGLHchLrNWhTRJGIdt5p5Edmk='
  },
  body: JSON.stringify({
    "source_id": "cnon:card-nonce-ok",
    "amount_money": {
      "amount": 19,
      "currency": "USD"
    },
    "autocomplete": true,
    "buyer_email_address": "saurabhksinha900@gmail.com",
    "idempotency_key": "bf13225c-374f-8ac8-aec6-a6532f487f3c"//always new value as input
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
