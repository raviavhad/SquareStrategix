const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'Code')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/Code/index.html'));
});

app.get('/suggestions', function(req, res) {
  res.sendFile(path.join(__dirname + '/Code/suggestions.html'));
});
app.get('/admin', function(req, res) {
  res.sendFile(path.join(__dirname + '/Code/admin.html'));
});

app.get('/a', function(req, res) {
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
      "idempotency_key": "3",
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
    //res.send(JSON.parse(response.body).payment_link.url);
    res.send('<a href="'+JSON.parse(response.body).payment_link.url+'">Redirect to CHECKOUT URL</a>');
  });

});


app.get('/list_payments', function(req, res) {
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://connect.squareupsandbox.com/v2/payments',
    'headers': {
      'Square-Version': '2023-09-25',
      'Authorization': 'Bearer EAAAEMFMcw4cRm3o5A4HBPxEy8mrGmMVSWtpuwXdfFSWPOW2EEMhOaBMivwoa7Rx',
      'Content-Type': 'application/json',
      'Cookie': '__cf_bm=2Dl1UM3C4dggpHM9e9PdnJ47abCb_FFK2E7lUHFwwlY-1696890225-0-AWmD+V7+4wbcs+awg8P5utgwTvURIoRXM5jsLxxt+vnxds4y27Uq80i7VJg9NEvGLHchLrNWhTRJGIdt5p5Edmk='
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body).payments);
var text="<style>  table {    font-family: arial, sans-serif;    border-collapse: collapse;    width: 100%;  }  td, th {    border: 1px solid #dddddd;    text-align: left;    padding: 8px;  }  tr:nth-child(even) {    background-color: #dddddd;  }  </style><h1>List of Payments</h1><table>";
    for(var i = 0;i< JSON.parse(response.body).payments.length;i++)
    {

        text=text+"<tr><td> <b>ID: </b>"+(JSON.parse(response.body).payments[i].id)+"</td><td> <b>Created AT: </b>"+(JSON.parse(response.body).payments[i].created_at)+'</td>'+"<td> <b>Updated At: </b>"+(JSON.parse(response.body).payments[i].updated_at)+"</td><td> <b>Amount Money: </b>"+(JSON.parse(response.body).payments[i].amount_money.amount)+'</td>          <td> <b>Amount Currency: </b>'+(JSON.parse(response.body).payments[i].amount_money.currency)+'</td></tr>'
    }
    text=text+"</table>";
    console.log(text);
    
    res.send(text);
    //res.send('<html><body><h1>List of Payments</h1></br></br>'+response.body+'</body></html>');
  });

});

app.listen(3017);
