const productsRouter = require('./products.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  app.use('/api/products', productsRouter);
  app.use('/api/users', usersRouter);
}


module.exports = routerApi;
