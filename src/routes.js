const express = require('express');
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

routes.get('/player', PlayerController.index);
routes.post('/player', PlayerController.create);
routes.delete('/player/:id', PlayerController.destroy);

module.exports = routes;