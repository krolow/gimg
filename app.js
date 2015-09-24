var Hapi = require('hapi');
var handlers = require('./handlers');

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/{width}/{height}/{type}', 
    handler: handlers.index
});

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});