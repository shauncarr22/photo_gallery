const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllProducts = function(callback, did) {
  connection.query(`SELECT * FROM products Where did = ${did}`, (err, results) => {
    if (err){
      console.log(err);
    }else{
      callback(null, results)
    }
  })
};

module.exports = {
  getAllProducts,
};
