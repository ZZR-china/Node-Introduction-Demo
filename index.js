var server = require('./server.js')
var router = require('./route.js')
var requestHandlers =require('./requestHandle.js')

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);