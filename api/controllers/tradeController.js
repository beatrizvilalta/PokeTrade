module.exports = () => {
    const Trade = require("../../database/Trade");
    const Sequelize = require("sequelize");
    const controller = {};

    controller.initialPage = (req, res) => {
        res.send('Initial page');;
    }

    controller.listTrades = (req, res) => {
        Trade.findAll({
            raw: true, order: [
                ['id', 'DESC']
            ]
        }).then(trades => {
            res.statusCode = 200;
            res.json(trades);
        }).catch(error => res.send(error));
    };

    controller.listTradeById = (req, res) => {
        if (isNaN(req.params.id)) {
            res.statusCode = 400;
            res.send('ID must be a number');
        } else {
            let id = parseInt(req.params.id);
            Trade.findAll({
                where: {
                    id: id
                }
            }).then(response => {
                res.statusCode = 200;
                res.json(response);
            }).catch(error => res.send(error));
        }
    };

    controller.createTrade = (req, res) => {
        let { given_total_power, offer_total_power } = req.body;

        Trade.create({
            given_total_power: given_total_power,
            offer_total_power: offer_total_power,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        }).then((response) => {
            res.statusCode = 200;
            res.json(response)
        }).catch(error => console.log(error));
    };

    return controller;
}