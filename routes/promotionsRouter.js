const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotions to you!');
    })
    .post((req, res, next) => {
        res.end(`Will add the promotion ${req.body.name} with details ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation is not supported for /promotions`);
    })
    .delete((req, res, next) => {
        res.end('Deleting all the promotions');
    });

promotionsRouter.route('/:promoId')
    .get((req, res, next) => {
        res.end(`Will send details of the promotion ${req.params.promoId} `);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation is not supported for /promotions/${req.params.promoId}`);
    })
    .put((req, res, next) => {
        res.write(`Updating the promotion: ${req.params.promoId}`);
        res.end(`Will update the promotion ${req.body.name} with details ${req.body.description}`)
    })
    .delete((req, res, next) => {
        res.end(`Deleting the promotion: ${req.params.promoId}`);
    });

module.exports = promotionsRouter