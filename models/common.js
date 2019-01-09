/*
 * @Description: 查询数据后返回promise对象统一处理 
 */
const db = require('./db');
class Common extends db {
    constructor(sql) {
        super(sql);
        this.sql = sql;
    }
    query() {
        return super.query(this.sql).then((data) => {
            return data;
        }).catch((error) => {
            return {
                returnCode: '000001',
                returnDesc: '查询失败'
            };
        });
    }
}
module.exports = Common;