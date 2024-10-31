var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(4001,0.0.0.0); //the server object listens on port 4000
