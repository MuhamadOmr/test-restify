var restify = require('restify'),
    axios   = require('axios');


var tasks = function (){

  // private code

  function registerDevices(req, res, next) {

    var data = req.body;

    axios.post(
        'http://localhost:4000/2/subscriptions',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-PUSHBOTS-APPID':'587772f5357e7195020041a7',
            'X-PUSHBOTS-SECRET':'b0ae0b20d89f819a44280b88c1aead34'
          }
        }).then(function(response){

      res.send(JSON.stringify(response.data, null, 2));
     return next();
    })

}

  function updateDevices(req, res, next) {

    var data = req.body;

    var ID = req.params.deviceId;
    axios.put(
        'http://localhost:4000/2/subscriptions/'+ ID,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-PUSHBOTS-APPID':'587772f5357e7195020041a7',
            'X-PUSHBOTS-SECRET':'b0ae0b20d89f819a44280b88c1aead34'
          }
        }).then(function(response){

      res.send(JSON.stringify(response.data, null, 2));
      return next();
    })

     // res.send(JSON.stringify(params, null, 2));

  }

// public code
return {
 registerDevices: registerDevices,
  updateDevices: updateDevices,

}

};

module.exports = tasks();