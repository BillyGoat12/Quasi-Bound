const { Router } = require('express');
const Card = require('../db/models/card');

const dbRouter = Router();

dbRouter.get('/cards', async (req, res) => {
  Card.getCards(req.query)
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => { console.error(err); res.sendStatus(500); });
});

dbRouter.post('/cards', async (req, res) => {
  await Card.createCard(req.body);
  res.sendStatus(201);
});

module.exports = dbRouter;