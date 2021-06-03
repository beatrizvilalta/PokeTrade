module.exports = () => {
    const Card = require("../../database/Card");
    const Sequelize = require("sequelize");
    const controller = {};

    controller.listCards = (req, res) => {
        Card.findAll({
            raw: true, order: [
                ['id', 'DESC']
            ]
        }).then(cards => {
            res.statusCode = 200;
            res.json(cards);
        }).catch(error => res.send(error));
    };

    controller.listCardsByTrade = (req, res) => {
        if (isNaN(req.params.trade_id)) {
            res.statusCode = 400;
            res.send('ID must be a number');
        } else {
            let trade_id = parseInt(req.params.trade_id);
            Card.findAll({
                where: {
                    trade_id: trade_id
                }
            }).then(response => {
                res.statusCode = 200;
                res.json(response);
            }).catch(error => res.send(error));
        };
    };

    controller.createCard = (req, res) => {
        let { name, offer, trade_id, createdAt, updatedAt } = req.body;

        Card.create({
            name: name,
            offer: offer,
            trade_id: trade_id,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        }).then((response) => {
            res.statusCode = 200;
            res.json(response);
        }).catch(error => console.log(error));
    };


    return controller;
}