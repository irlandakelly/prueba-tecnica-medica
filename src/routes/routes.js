var express = require('express');
var route = express();

// import controller
const controller = require('../controllers/controller')

// create routes
route.get('/list', controller.list);
route.get('/create', controller.create);
route.get('/update/:id', controller.update);
route.get('/get/:id', controller.get);
route.get('/delete/:id', controller.delete);

// export routes
module.exports = route;