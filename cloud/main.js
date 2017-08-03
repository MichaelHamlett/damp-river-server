
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Push.send({
  where: {
    "deviceType": "ios"
  },
  "push_time" : "2017-08-03 15:32:00",
  "data" : {
    "alert": "3:32 boiii",
     "sound": "default"
  }
}, { useMasterKey: true}).then(() => {
  console.log('Push ok');
}, (e) => {
  console.log('Push error', e);
});
