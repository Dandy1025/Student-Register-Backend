const express = require('express');
const registerStudent = require('../controller/studentController')

const router = express.Router();

router.post('/register', registerStudent);

module.exports = router;