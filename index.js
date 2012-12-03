var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

//Main Request Handler
handle['/'] = requestHandlers.main;

//Page Template Request Handlers
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/create'] = requestHandlers.create;
handle['/read'] = requestHandlers.read;
handle['/readall'] = requestHandlers.readall;
handle['/update'] = requestHandlers.update;
handle['/destroy'] = requestHandlers.destroy;

//User Request Handling


//Order Request Handling
handle['/createorder'] = requestHandlers.createorder;
handle['/deleteorder'] = requestHandlers.deleteorder;
handle['/updateorder'] = requestHandlers.updateorder;
handle['/order'] = requestHandlers.order;
handle['/orders'] = requestHandlers.orders;


//Start Server and Pass route to router
server.start(router.route, handle);