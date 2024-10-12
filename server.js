require('dotenv').config();

const express = require('express');
const studentRoutes = require('./src/routes/studentRoutes.js');

const app = express();

app.use('/api/student', studentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});