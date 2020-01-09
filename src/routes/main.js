// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/register', mainController.registerForm);
router.post('/register', mainController.storage);


module.exports = router;
