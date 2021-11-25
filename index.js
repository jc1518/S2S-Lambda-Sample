/**
 * Sample Lambda code for S2S
 * https://github.com/jc1518/S2S
 */

"use strict";

const demoPage =
  '<html><body><h2>This Lambda is created by S2S!</h2><p id="demo"></p><script>const d = new Date();document.getElementById("demo").innerHTML = d;</script></body></html>';

async function handler(event, context) {
  return {
    body: demoPage,
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
  };
}
exports.handler = handler;
