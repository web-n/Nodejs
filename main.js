var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    response.writeHead(200);
    console.log(__dirname + request.url);
    response.end("Hello egoing");
});
app.listen(3000);
