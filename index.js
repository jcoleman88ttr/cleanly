var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

//Main Request Handler
handle['/'] = requestHandlers.form;

//Page Template Request Handlers
handle['/form'] = requestHandlers.form;
handle['/login'] = requestHandlers.login;
handle['/menu'] = requestHandlers.menu;
handle['/schedule'] = requestHandlers.schedule;
handle['/search'] = requestHandlers.search;
handle['/confirm'] = requestHandlers.confirm;


//User Request Handling


//Order Request Handling
handle['/createorder'] = requestHandlers.createorder;
handle['/deleteorder'] = requestHandlers.deleteorder;
handle['/updateorder'] = requestHandlers.updateorder;
handle['/order'] = requestHandlers.order;
handle['/orders'] = requestHandlers.orders;


//Start Server and Pass route to router
server.start(router.route, handle);