'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const API_VERSION = '1.0';
const API = '/api/' + API_VERSION + '/';

const dbModel = require('./model/index')

// initialize DB
dbModel.init()

// App
const app = express();

app.get(API + 'users', (req, res) => {
  dbModel.User.findAll().then(users => {
    res.send(users);
  })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
