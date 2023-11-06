const { Router } = require('express');

const newsRouter = Router();

newsRouter.get('/', (req, res) => {
  res.send('Hello from news router!');
});

newsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Hello from news router with id: ${id}!`);
});

newsRouter.post('/', (req, res) => {
  const { body } = req;
  res.json(`Hello from news router with body: ${body}`);
});

module.exports = newsRouter;