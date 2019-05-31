const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../routers/projects');

const server = express();

const middleware = [
  helmet(),
  express.json(),
];

server.use(middleware);

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
  res.send('Api is working');
});

// project router
server.use('/api/projects', projectRouter);

// action router


module.exports = server;
