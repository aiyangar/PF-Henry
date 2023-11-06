const { Router } = require('express');

const jobBoardRouter = Router();

jobBoardRouter.get('/', (req, res) => {
  res.send('Hello from jobBoard router!');
});

jobBoardRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Hello from jobBoard router with id: ${id}!`);
});

jobBoardRouter.post('/', (req, res) => {
  const { body } = req;
  res.json(`Hello from jobBoard router with body: ${body}`);
});

module.exports = jobBoardRouter;