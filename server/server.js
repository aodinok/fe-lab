'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const API_VERSION = '1.0';
const API = '/api/' + API_VERSION + '/'


// App
const app = express();
app.get(API + 'test', (req, res) => {
  res.send('Hello world!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
