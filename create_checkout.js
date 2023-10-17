var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://connect.squareupsandbox.com/v2/online-checkout/payment-links',
  'headers': {
    'Square-Version': '2023-09-25',
    'Authorization': 'Bearer EAAAEMFMcw4cRm3o5A4HBPxEy8mrGmMVSWtpuwXdfFSWPOW2EEMhOaBMivwoa7Rx',
    'Content-Type': 'application/json',
    'Cookie': '__cf_bm=w7s8lx.33vgA9Ebr2tVnYXAzWtMa0BULQWafJVQfJY0-1697268744-0-AXGbIdxfs9wCMeVQWezbiNDEERvi4xEVIe7mO9bPUFTY6Ezq/gUN2y2WNnq60tKf9NLaZeENg2aSsicxqybS5QE='
  },
  body: JSON.stringify({
    "idempotency_key": "2",
    "quick_pay": {
      "name": "Auto Detailing",
      "price_money": {
        "amount": 12500,
        "currency": "USD"
      },
      "location_id": "LSZSAAS0KWEKA"
    }
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
