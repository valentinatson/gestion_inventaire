const dataBase = require("../config/mysql")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')




exports.signup = (req,res) => {
    console.log(req.body);
    

    let insertUserQuery = "INSERT INTO users (nom, password ) VALUES (?,?)"

    bcrypt
    .hash(req.body.password, 5)
    .then((hash) => {
        dataBase.query(
            insertUserQuery,
            [req.body.name, hash],
            (error, result)=>{
                if (error) {
                    res.status(401).json(error)
                }
                res.status(201).json({hash, id_users: result.insertId})
            }  
        ) 
        
        
        
    })
    .catch((error) => {
        res.status(500).json(error)
    })
    

}


exports.login = (req,res) => {
    console.log(req.body); 

    let selectUserQuery = "SELECT * from `users` WHERE password =? ";
    dataBase.query(selectUserQuery,[req.body.password], (error, result) => {
        //error? res.json(error) : res.status(200).json(result) 

        if(error){
            // query not executed due to server error
            res.status(500).json(error)
        } 
        if(result.length > 0){
            //user found
            bcrypt.compare(req.body.password,result[0].password)
            .then((valid) => { 
                if(valid){
                    //valid password
                    let accessToken = jwt.sign(
                        {user_id : result[0].id_users},"12345678",{expiresIn: "15h"}
                    )
                    //res.status(200).json("c'est parfait")
                    res.status(200).json({accessToken})
                }else{
                    //invalid password
                    res.status(401).json({error:"incorrect password"})
                }
            })
            .catch((error) => res.status(500).json(error))
        }else{
            //user not found
            res.status(401).json({error:"user not found"})
        }
    })
}