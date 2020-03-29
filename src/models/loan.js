const connection = require('../configs/db')

module.exports = {
  getLoans: () =>{
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `loan`", (err, result) => {
        if(!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  insertLoan: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO `loan` SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  
  updateLoan: (id_loan, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE `loan` SET ? WHERE id = ?", [data, id_loan], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  
  deleteLoan: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM `loan` WHERE id = ?", id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}

// loanDetail: (id) => {
//   return new Promise((resolve, reject) => {
//     connection.query("SELECT * FROM `loan` INNER JOIN category ON book.category = category.id WHERE title = ?", id, (err, result)=> {
//       if (!err) {
//         resolve(result)
//       } else {
//         reject(new Error(err))
//       }
//     })
//   })
// },