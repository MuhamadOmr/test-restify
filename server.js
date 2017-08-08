var restify = require('restify'),
    axios = require('axios'),
    tasks = require('./api/tasks');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
// using body parser plugin for dealing with json in the
// req.body
server.use(restify.plugins.bodyParser());


server.post('/register-device', tasks.registerDevices);

server.post('/update-device/:deviceId', tasks.updateDevices);



server.listen(8088, function() {
  console.log('%s listening at %s', server.name, server.url);
});
