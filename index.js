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
handle['/search'] = requestHandlers.broadcast;
handle['/confirm'] = requestHandlers.confirm;
handle['/register'] = requestHandlers.register;


//User Request Handling
handle['/changestatus'] = requestHandlers.changeStatus;
handle['/getcleaners'] = requestHandlers.getCleaners;
handle['/getusers'] = requestHandlers.getUsers;
handle['/checkuser'] = requestHandlers.checkUser;

//Order Request Handling
handle['/addorder'] = requestHandlers.addOrder;
handle['/removeorder'] = requestHandlers.removeOrder;
handle['/changeorder'] = requestHandlers.changeOrder;
handle['/getorder'] = requestHandlers.getOrder;
handle['/getorders'] = requestHandlers.getOrders;



//Start Server and Pass route to router
server.start(router.route, handle);