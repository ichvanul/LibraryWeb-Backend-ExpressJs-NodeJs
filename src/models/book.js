const connection = require('../configs/db')

module.exports = {
  getData: (search, sort, sortasc) => {
    return new Promise((resolve,reject)=> {
      if(search){
        connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id WHERE title LIKE? OR description LIKE ? ORDER BY title DESC", [`%${search}%`,`%${search}%`], (err, result)=>{
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      } else if (sort) {
        connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id ORDER BY " + sort + ' DESC',  (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject (new Error(err))
          }
        })
      } else if (sortasc) {
        connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id ORDER BY " + sortasc, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject (new Error(err))
          }
        })
      } else {
        connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id", (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },

  getPage: (page, total)=> {
    const dataPage = 4;
    const totalPage = total / dataPage;
    const firstDate = dataPage * page - dataPage;

    return new Promise((resolve,reject)=> {
      connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id ORDER BY id_book ASC LIMIT ?, ?",[firstDate, dataPage], (err,result)=> {
        if(!err){
          const thisPage = Math.ceil(totalPage);
            if(page <= thisPage){
              resolve([`Total Page: ${thisPage}`, `Current Page: ${page}`,result])}
            } else {
              reject(new Error(err))
            }
        })
    })
  },

  insertBook: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO `book` SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  bookDetail: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id WHERE title = ?", id, (err, result)=> {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateBook: (id_book, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE book SET ? WHERE id= ?", [data, id_book], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteBook: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM book WHERE id = ?", id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}

  // getBooks: (search, sort, sortasc) =>{
  //   return new Promise((resolve, reject)=>{
      // if(search){
      //   connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id WHERE title LIKE? OR description LIKE ? ORDER BY title DESC", [`%${search}%`,`%${search}%`], (err, result)=>{
      //     if(!err){
      //       resolve(result)
      //     }else{
      //       reject(new Error(err))
      //     }
      //   })
  //     } else if (sort) {
  //       connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id ORDER BY " + sort + ' DESC',  (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //           reject (new Error(err))
  //         }
  //       })
  //     } else if (sortasc) {
  //       connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id ORDER BY " + sortasc, (err, result) => {
  //         if (!err) {
  //           resolve(result)
  //         } else {
  //           reject (new Error(err))
  //         }
  //       })
    //   }else{
    //     connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id", (err, result) => {
    //       if (!err) {
    //         resolve(result)
    //       } else {
    //         reject(new Error(err))
    //       }
    //     })
    //   }
    // })
  // },

    // sortBook : ()=> {
  //   return new Promise((resolve,reject)=> {
      
  //     connection.query("SELECT * FROM `book` INNER JOIN category ON book.category = category.id WHERE title ORDER BY author", (err,result)=>{
  //       if(!err){
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },