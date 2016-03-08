/* 
* @Author: anchen
* @Date:   2016-03-07 19:37:28
* @Last Modified by:   anchen
* @Last Modified time: 2016-03-08 20:20:49
*/
var http = require('http')
var url = require('url')

function start(route, handle) {
    
   function onResponse (req, res){
       var pathname = url.parse(req.url).pathname
       console.log("Request for " + pathname + " received.");
       route(handle, pathname, res, req);

   }
    
    http.createServer(onResponse).listen(3000)
    console.log("Server has start")

}

exports.start = start

