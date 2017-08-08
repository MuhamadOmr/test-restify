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

      res.send(response.data);
     return next();
    })

}

  function updateDevice(req, res, next) {


    var ID = req.params.deviceId;
    axios.get(
        'http://localhost:4000/2/subscriptions/'+ ID,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-PUSHBOTS-APPID':'587772f5357e7195020041a7',
            'X-PUSHBOTS-SECRET':'b0ae0b20d89f819a44280b88c1aead34'
          }
        }).then(function(response){

      res.send(response.data);
      return next();
    })
  }


  function getDevice(req, res, next) {


    var ID = req.params.deviceId;
    axios.get(
        'http://localhost:4000/2/subscriptions/'+ ID,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-PUSHBOTS-APPID':'587772f5357e7195020041a7',
            'X-PUSHBOTS-SECRET':'b0ae0b20d89f819a44280b88c1aead34'
          }
        }).then(function(response){

      res.send(response.data);
      return next();
    })
  }

  function deleteDevice(req, res, next) {


    var ID = req.params.deviceId;
   // console.log(ID);
    axios.delete(
        'http://localhost:4000/2/subscriptions/'+ ID,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-PUSHBOTS-APPID':'587772f5357e7195020041a7',
            'X-PUSHBOTS-SECRET':'b0ae0b20d89f819a44280b88c1aead34'
          }
        }).then(function(response){

      res.send(response.data);
      return next();
    })
  }
// public code
return {
 registerDevices: registerDevices,
  updateDevice:   updateDevice,
  getDevice:      getDevice,
  deleteDevice:   deleteDevice,

}

};

module.exports = tasks();