const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
  res.send('Api is working');
});

module.exports = server;
