/**
 * Sample Lambda code for S2S
 * https://github.com/jc1518/S2S
 */

"use strict";

const dateTime = new Date();

async function handler(event, context) {
  return {
    body: {
      data: `Hello, this Lambda function is deployed by S2S! \nCurrent time is ${dateTime}`,
    },
    statusCode: 200,
  };
}
exports.handler = handler;
