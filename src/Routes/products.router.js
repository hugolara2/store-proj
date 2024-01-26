const express = require('express');
const ProductsServices = require('../Services/product.service');

const router = express.Router();
const service = new ProductsServices();

router.get('/', (req, res) => {
    const { id } = req.query;
    if(id != null) {
        const product = service.findOne(id);
        res.json(product);
    } else {
        const products = service.findAll();
        res.json(products);
    }
});

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Created',
        data: body
    });
});

router.patch('/', (req, res) => {
    const { id } = req.query;
    const body = req.body;
    res.json({
        message: 'Updated',
        data: body,
        id
    });
});

router.delete('/', (req, res) => {
    const { id } = req.query;
    res.json({
        message: 'Deleted',
        id
    });
});

module.exports = router;
