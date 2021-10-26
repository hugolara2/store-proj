const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 15;

  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.firstName(),
      'last name': faker.name.lastName(),
      'phone number': faker.phone.phoneNumber(),
    });
  }
  res.json(users);
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({
    id: userId,
    name: faker.name.firstName(),
    'last name': faker.name.lastName(),
    'phone number': faker.phone.phoneNumber(),
  });
});

module.exports = router;
