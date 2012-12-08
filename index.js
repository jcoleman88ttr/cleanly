var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

//Main Request Handler
handle['/'] = requestHandlers.main;
handle['/main'] = requestHandlers.main;
handle['/app'] = requestHandlers.form;

//Page Template Request Handlers
handle['/login'] = requestHandlers.login;
handle['/menu'] = requestHandlers.menu;
handle['/schedule'] = requestHandlers.schedule;
handle['/search'] = requestHandlers.search;
handle['/confirm'] = requestHandlers.confirm;
handle['/register'] = requestHandlers.register;


//User Request Handling
handle['/getCleaners'] = requestHandlers.getCleaners;

//Order Request Handling
handle['/createorder'] = requestHandlers.createorder;
handle['/deleteorder'] = requestHandlers.deleteorder;
handle['/updateorder'] = requestHandlers.updateorder;
handle['/order'] = requestHandlers.order;
handle['/orders'] = requestHandlers.orders;
handle['/listorders'] = requestHandlers.listorders;


//Start Server and Pass route to router
server.start(router.route, handle);