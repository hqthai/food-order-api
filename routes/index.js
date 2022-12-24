const storeRouter = require('./store')
const orderRouter = require('./order')
const foodRouter = require('./food')
function route(app) {
    app.use('/api/store', storeRouter);
    app.use('/api/order', orderRouter);
    app.use('/api/food', foodRouter);
}

module.exports = route;