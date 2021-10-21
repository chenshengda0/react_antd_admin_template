/*引入mysql*/
const mysql = require("mysql");
//配置
const database = {
    host: "localhost",
    user: "root",
    password : "231510622Abc@",
    database: "local",
    multipleStatements: true,
};
const pool  = mysql.createPool(database);

/**
 * 封装query之sql带不占位符func
 */
const query = (sql, callback)=>{
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows) {
            callback(err, rows);
            //释放链接
            connection.release();
        });
    });
}

/**
 * 封装query之sql带占位符func
 */
const queryArgs = (sql, args, callback)=>{
    pool.getConnection(function(err, connection) {
        connection.query(sql, args, function(err, rows) {
            callback(err, rows);
            //释放链接
            connection.release();
        });
    });
}

module.exports = {
    query,
    queryArgs,
}
