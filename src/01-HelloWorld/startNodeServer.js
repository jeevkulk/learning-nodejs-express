var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello World!!');
    response.write(module1.helloString);
    module1.sayHello();
    response.write(module2.helloString);
    module2.sayHello();
    response.end();
}

http.createServer(onRequest).listen(8080);