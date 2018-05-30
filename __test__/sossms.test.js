'use strict';

import sossms from '../index';
// (error, message, fromNumber, toNumber)

describe('Testing deployed api', () => {
  // testing with valid to and from numbers
  test('should return a 200 status, with valid Twilio sId', () => {
    return sossms(1000, 'Successfully texted!', process.env.TWILIO_NUMBER, process.env.PHONE_NUMBER)
      .then((response) => {
        expect(response.status).toEqual(200);
      });
  });

  // testing with invalid USER_ID
  test('should return 500 if USER_ID is invalid', () => {
    return sossms(1000, 'Successfully texted!', process.env.NOTHING, process.env.PHONE_NUMBER)
      .catch((err) => {
        expect(err).toContain('A \'From\' phone number is required');
      });
  });
});
