var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'library'
});
 
connection.connect((err) => {
    if(err) console.log(`Error MYSQL : ${err}`)
});

module.exports = connection