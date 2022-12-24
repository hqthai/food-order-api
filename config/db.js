const sql = require('mssql/msnodesqlv8')

const config = {
    user: 'sa',
    password: '123',
    server: 'LAPTOP-OIBBNV6Q\\SQLEXPRESS',
    database: 'QLBanHang',
    driver: 'msnodesqlv8',
    options: {
        "enableArithAbort": true,
        "encrypt":false
    }
}

const db = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
})


module.exports = { db }