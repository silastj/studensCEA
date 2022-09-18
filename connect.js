import sqlite3 from 'sqlite3'
import fetch from "node-fetch";


// Create table, run the command once

// db.run(`CREATE TABLE users(first_name, last_name, username, password, email, id)`
// )

// Conect database 

let db = new sqlite3.Database('./db/mock.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err)  return console.error(err.message);

  console.log('Connected Sucesssful.');
});

// // Insert new row database data

// const sql = `INSERT INTO users (first_name, last_name, username, password, email, id)
//               VALUES(?,?,?,?,?,?)`
// db.run(sql,['Amós', 'Santos','asilas', '123456', 'silastj@hotmail.com', 30041984 ], 
//   (err) => {
//     if(err) return console.error(err.message)

//     console.log('A new row has been created')
// })

// All database
const sql = `SELECT * FROM users`
db.all(sql, [], (err, rows) => {
  if(err) return console.error(err.message)
  
  rows.forEach((row) => {
    console.log(row)
  })
})


// fetch("https://random-data-api.com/api/users/random_user")
// .then((response) => {
//   const data = response
//   // const { data } = response
//   const{ first_name } = data
//   const{ last_name } = data
//   const{ user_name } = data
//   const{ email} = data
//   const{ id } = data
//   const{ password } = data

// const sql = `INSERT INTO users (first_name, last_name, username, password, email, id)
//               VALUES(?,?,?,?,?,?)`
// db.run(sql,[first_name, last_name,user_name, password, email,id ], 
//   (err) => {
//     if(err) return console.error(err.message)

//     console.log('A new row has been created')
// })
// })


// let sql = `SELECT * FROM MOCK_DATA`;

// db.all(sql, [], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// close the database connection

db.close((err) => {
  if (err) return console.error(err.message)

  console.log('Close the database connection.');
});