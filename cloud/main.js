
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('send', function(req, res) {
  Parse.Push.send({
    where: {
      "deviceType": "ios"
    },
    "push_time" : "2017-08-03T16:40:00.000Z",
    "data" : {
      "alert": "One of the events you signed up for is over, go tell your friends how it went!",
       "sound": "default"
    }
  }, { useMasterKey: true}).then(() => {
    console.log('Push ok');
  }, (e) => {
    console.log('Push error', e);
  });
});
