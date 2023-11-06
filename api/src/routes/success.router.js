const { Router } = require('express');

const successRouter = Router();

successRouter.get('/', (req, res) => {
  res.send('Hello from success router!');
});

successRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Hello from success router with id: ${id}!`);
});

successRouter.post('/', (req, res) => {
  const { body } = req;
  res.json(`Hello from success router with body: ${body}`);
});

module.exports = successRouter;