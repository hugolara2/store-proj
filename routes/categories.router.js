const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;

  for(let i = 0; i < limit; i++){
    categories.push({
      name: faker.commerce.productDescription()
    });
  }
  res.json(categories);
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  req.json({
    id: categoryId,
    category: faker.commerce.productDescription()
  });
});


module.exports = router;
