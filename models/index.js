/*
 * @Description: xxxx 
 */
const Common = require('./common');
const sql = require('./sql');
class Index extends Common {
    constructor(sql) {
        super(sql);
        this.sql = sql;
    }
    banner() {
        return super.query(this.sql);
    }
    channel() {
        return super.query(this.sql);
    }
}


module.exports = Index;