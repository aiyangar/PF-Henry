const { Router } = require('express');

const teamRouter = require('./team.router');
const faqsRouter = require('./faqs.router');
const goalsRouter = require('./goals.router');
const successRouter = require('./success.router');
const newsRouter = require('./news.router');
const jobBoardRouter = require('./jobBoard.router');


const mainRouter = Router();


mainRouter.use('/team', teamRouter);
mainRouter.use('/faqs', faqsRouter);
mainRouter.use('/goals', goalsRouter);
mainRouter.use('/success', successRouter);
mainRouter.use('/news', newsRouter);
mainRouter.use('jobBoard', jobBoardRouter);


module.exports = mainRouter;
