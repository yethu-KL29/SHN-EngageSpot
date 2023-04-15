const express = require('express');
const DataRouter = express.Router();

const { dataCreate,dataGet } = require('../Controller/dataController');
DataRouter.post('/create', dataCreate);
DataRouter.get('/get', dataGet);

module.exports = DataRouter;

