/* 
 * @Description: 连接数据库公共方法
 */
const mysql = require('mysql');
let mysqlConfig = {
    host: '',
    port: '3306',
    database: '',
    user: '',
    password: '',
    insecureAuth: true,
    connectTimeout: 10000
};
class db {
    constructor(sql) {
        this.sql = sql;
    }
    query() {
        return new Promise((resolve, reject) => {
            let connection = mysql.createConnection(mysqlConfig);
            connection.connect();
            connection.query(this.sql, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
            connection.end();
        });
    }
}
module.exports = db;