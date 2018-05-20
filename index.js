'use strict';

import Twilio from 'twilio';
const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default function (error, message, fromNumber, toNumber) {
  client.messages
  .create({
    body: `${error}: ${message}`,
    from: fromNumber,
    to: toNumber,
  })
  .then((twilioMessage) => {
    console.log('Response: ', twilioMessage.sid);
  })
  .done()
  .then(response => {
    return response;
  })
  .catch(err=>{
    return err;
  })
}
