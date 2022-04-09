var http= require('http');
var cookie = require('cookie');
http.createServer(function(request, response) {
  console.log('hello cookies')
  var cookies = {};
  if(request.headers.cookie !== undefined) {
    cookies = cookie.parse(request.headers.cookie);
    console.log(cookies);
    console.log(cookies['something-new'])
  }
  // response.writeHead(200, {
  //   'Set-Cookie' : ['yummy_cookie=choco', 'tasty_cookie=strawberry','something-new=what is it']
  // })
  response.end('Cookie!!');
}).listen(3000);