module.exports = app => {
    const controller = require('../controllers/cardController')();

    app.route('/api/cards')
        .get(controller.listCards)
        .post(controller.createCard);

    app.route('/api/cards/:trade_id')
        .get(controller.listCardsByTrade)
};