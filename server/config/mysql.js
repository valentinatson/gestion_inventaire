const mysql= require("mysql2")
const dataBase= mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"gestion_stock"
})

dataBase.connect((error)=>{
    if(error) throw error;
    console.log("database connect successfully");
})

module.exports= dataBase;