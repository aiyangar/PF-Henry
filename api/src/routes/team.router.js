const { Router } = require('express');

const teamRouter = Router();

teamRouter.get('/', (req, res) => {
  res.send('Hello from team router!');
});

teamRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Hello from team router with id: ${id}!`);
});

teamRouter.post('/', (req, res) => {
  const { body } = req;
  res.json(`Hello from team router with body: ${body}`);
});

module.exports = teamRouter;