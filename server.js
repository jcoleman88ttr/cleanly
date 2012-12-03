var http = require("http");
var url = require("url");
var mysql = require("mysql");



function start(route, handle) {
  function onRequest(request, response) {
	var db = mysql.createConnection({
	   user: "root",
	   password: "",
	   database: "cleanly"
	});
  
	var postData = "";
    var pathname = url.parse(request.url).pathname;
	var params = url.parse(request.url, true).query;
	
    console.log("Request for " + pathname + " received.");
	
	//Set UTF8 Encoding
	request.setEncoding("utf8");
	
	//Add Post data Chuck to the Main Post Data Variable
	request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });
	
	//Send Data to Router after receiving all chunks
    request.addListener("end", function() {
      route(handle, pathname, response, postData, db, params);
    });
  }

  http.createServer(onRequest).listen(8080);
  console.log("Server has started.");
}

exports.start = start;