
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.push.send({
  where: {
    "deviceType": "ios"
  },
  "data" : {
    "alert": "Breaking News!",
     "sound": "default"
  }
}, { useMasterKey: true}).then(() => {
  console.log('Push ok');
}, (e) => {
  console.log('Push error', e);
});
