var apn = require('apn');

// setup the provider
var options = {
  token: {
    key: "./AuthKey_2T6BQ7PVPQ.p8",
    keyId: "2T6BQ7PVPQ",
    teamId: "K3CQQKBR25"
  },
  production: false
};
var apnProvider = new apn.Provider(options);

// setup the notification
var note = new apn.Notification();
note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.alert = "TEST PUSH";
note.topic = "irodrigo.Vimvest.iOSClient";

// send the notification
let deviceToken = "a4e8f439389f6e0153dc12e5c1378be8c6c1827263b94a0d45a84d900b5e3549"

console.log(`push notification: ${JSON.stringify(note)}`);
console.log(`device token: ${deviceToken}`);
console.log(`sending...`);

apnProvider.send(note, deviceToken).then( (result) => {
  // response.sent: Array of device tokens to which the notification
  // was sent succesfully
	// response.failed: Array of objects containing the device token (`device`)
  // and either an `error`, or a `status` and `response` from the API
  console.log(`sent: ${JSON.stringify(result.sent)}`);
  console.log(`failed: ${JSON.stringify(result.failed)}`);
  process.exit()
});
