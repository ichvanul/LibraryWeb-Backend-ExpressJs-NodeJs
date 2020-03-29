const connection = require('../configs/db')

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM `user` ", (err, result) => {
          if (!err) {
            resolve (result)
          } else {
            reject (new Error(err))
          }
        })
    })
  },
 
  register: data => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO `user` SET ?', data, (err, result) => {
            if (!err) {
                resolve (result)
            } else {
                reject (new Error(err))
            }
        })
    })
  },

  checkEmail: email => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT user.email FROM `user` WHERE email = ?', email, (err, result) => {
            if (!err) {
                resolve (result)
            } else {
                reject (new Error(err))
            }
        })
    })
  },

  login: email => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `user` WHERE email = ?', email, (err, result) => {
            if(!err){
                resolve(result[0])
            }else{
                reject(new Error(err))
            }
        })
    })
},

  userDetail: (id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `user` WHERE id_user = ?", id_user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteUser: (id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM `user` WHERE id_user = ?", id_user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  editUser: (id_user, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE `user` SET ? WHERE id_user = ?', [data, id_user], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}