const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const jwt = require('jsonwebtoken');
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
let refreshTokens = [];

let APIKEY = process.env.TWO_FACTOR_API_KEY;
if (APIKEY === '') {
  throw new Error('Missing 2Factor api key in environment');
}

const TwoFactor = new (require('2factor'))(APIKEY);

const app = express();
app.use(express.json());
 let phone =6265187023;
 let otp = Math.floor(1000 + Math.random() * 9000);
//Start  http://2factor.in/API/V1/${process.env}/SMS/${phone}/${otp}/educheck_otp
var request = require("request");

var options = { method: 'GET',
  url: 'http://2factor.in/API/V1/fda7bc0b-20f9-11e7-929b-00163ef91450/SMS/6265187023/2867/educheck_otp',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form: {} };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
// End

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());
const port = process.env.PORT || 5000 || 8888;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
