var http = require("http");
var moment = require("moment");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello Worldd"); //write a response to the client
    var now = moment();
    res.write(now.format());
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
