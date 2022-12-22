const db = require('../config/db')
class OrderController {
    async getOrders(req, res){
        try {
            // make sure that any items are correctly URL encoded in the connection string
            let pool = await db.db
            let stores = await pool.request().query('select * from CUA_HANG')
            res.json(stores.recordsets[0])
        } catch (err) {
            console.log(err)
        }
    }

    async getOrdersByPartnerId(req, res){
        try {
            // make sure that any items are correctly URL encoded in the connection string
            let pool = await db.db
            let storeID = req.params.id
            let store = await pool.request().query(`select * from CUA_HANG where ID_CuaHang = '${storeID}'`)
            res.json(store.recordsets[0])
        } catch (err) {
            console.log(err)
        }
    }
    
    async addOrder(req, res){
        try {
            // make sure that any items are correctly URL encoded in the connection string
            let pool = await db.db
            let store = {...req.body}[0]
            let insertStore = await pool.request().query(`
            insert into CUA_HANG (ID_CuaHang, ID_HopDong, TenCuaHang, TgDoiTen, TgHoatDong, TinhTrangCuaHang)
            values ('${store.ID_CuaHang}', '${store.ID_HopDong}', N'${store.TenCuaHang}', '${store.TgDoiTen}', N'${store.TgHoatDong}', N'${store.TinhTrangCuaHang}')
            `)
            res.json('Success')
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    }
}

module.exports = new OrderController()