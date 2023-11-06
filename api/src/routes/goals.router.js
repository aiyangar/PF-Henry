const { Router } = require('express');

const goalsRouter = Router();

goalsRouter.get('/', (req, res) => {
  res.send('Hello from goals router!');
});

goalsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Hello from goals router with id: ${id}!`);
});

goalsRouter.post('/', (req, res) => {
  const { body } = req;
  res.json(`Hello from goals router with body: ${body}`);
});

module.exports = goalsRouter;