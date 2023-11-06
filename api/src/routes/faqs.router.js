const { Router } = require('express');

const faqsRouter = Router();

faqsRouter.get('/', (req, res) => {
  res.send('Hello from faqs router!');
});

faqsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Hello from faqs router with id: ${id}!`);
});

faqsRouter.post('/', (req, res) => {
  const { body } = req;
  res.json(`Hello from faqs router with body: ${body}`);
});

module.exports = faqsRouter;