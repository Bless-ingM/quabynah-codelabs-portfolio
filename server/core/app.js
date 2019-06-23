const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Live server
app.listen(process.env.PORT || 7000, () => console.log('Server started...'));

module.exports = app;