var express = require('express');
var router = express.Router();
var main = require('./authentication/auth');

/* Registering All the routes */
router.get('/', main.home);
router.post('/login', main.login);
router.post('/signup', main.signup);





module.exports = router;