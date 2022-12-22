const storeRouter = require('./store');
const orderRouter = require('./order')
function route(app) {
    app.use('/api/store', storeRouter);
    app.use('/api/order', orderRouter);
    
}

module.exports = route;