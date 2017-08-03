
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Push.send({
  where: {
    "deviceType": "ios"
  },
  "data" : {
    "push_time" : "2017-08-03 15:28:00",
    "alert": "3:25 boiii",
     "sound": "default"
  }
}, { useMasterKey: true}).then(() => {
  console.log('Push ok');
}, (e) => {
  console.log('Push error', e);
});
