/**
 * Sample Lambda code for S2S
 * https://github.com/jc1518/S2S
 */

"use strict";

async function handler(event, context) {
  return {
    body: '"Hello, this Lambda function is deployed by S2S!"',
    statusCode: 200,
  };
}
exports.handler = handler;
