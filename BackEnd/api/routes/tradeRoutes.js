module.exports = app => {
    const controller = require('../controllers/tradeController')();

    app.route('/api/trades')
        .get(controller.listTrades)
        .post(controller.createTrade);

    app.route('/api/trade/:id')
        .get(controller.listTradeById)
};