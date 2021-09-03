/* ---------------------------------------------------------------------- */
/*                                 SMS                                    */
/* ---------------------------------------------------------------------- */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const dotenv = require('dotenv');
dotenv.config();

//https://www.twilio.com/console/sms/whatsapp/sandbox
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

module.exports = client