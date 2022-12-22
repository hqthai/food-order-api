const db = require('../config/db')
class StoreController {
    async getStores(req, res){
        try {
            // make sure that any items are correctly URL encoded in the connection string
            let pool = await db.db
            let stores = await pool.request().query('select * from CUA_HANG')
            res.json(stores.recordsets[0])
        } catch (err) {
            console.log(err)
        }
    }

    async getStroresByPartnerId(req, res){
        try {
            // make sure that any items are correctly URL encoded in the connection string
            let pool = await db.db
            let PartnerID = req.params.id
            let orders = await pool.request().query(`
            select ch.TENCUAHANG, ctdh. TENMON, ctdh.SOLUONG, dh.THANHTIEN, dh.PHIVANCHUYEN, dh.THANHTIEN
            from DONDATHANG dh join CHITIETDONDATHANG ctdh on dh.MADONHANG = ctdh.MADONHANG join CUAHANG ch on ch.MACUAHANG = dh.MACUAHANG
            where ch.MADOITAC = '${PartnerID}'`)
            res.json(orders.recordsets[0])
        } catch (err) {
            console.log(err)
        }
    }
    
    async addStore(req, res){
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

module.exports = new StoreController()