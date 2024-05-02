const dataBase= require("../Config/mysql")
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")

exports.signup= (req, res)=>{
    console.log(req.body);
    let insertUser= "INSERT INTO users(name_user,password_user) VALUES (?,?)"
  
    bcrypt 
    .hash(req.body.password, 5)
    .then((hash)=>{
        dataBase.query(
            insertUser,
        [req.body.name,hash],
        (error, result)=>{
            if (error) {
                res.status(401).json(error)
            }
             res.status(201).json({hash, id: result.insertId})
        }
        )
    })
  
    .catch((error)=>{
        res.status(500).json(error)
    })
  }

  exports.login = (req,res) => {
    console.log(req.body);

    let selectUserQuery = "SELECT * FROM users WHERE name_user = ?";
    dataBase.query(selectUserQuery, [req.body.name], (error, result) => {
        if (error) {
        
            res.status(500).json({ error: error.message });
        } else {
            if (result.length > 0) {
                
                bcrypt.compare(req.body.password, result[0].password_user)
                    .then((valid) => {
                        if (valid) {
                            
                            let accessToken = jwt.sign(
                                { id_user: result[0].id_user },
                                "12345678",
                                { expiresIn: "15h" }
                            );
                            res.status(200).json({ accessToken });
                        } else {
                            
                            res.status(401).json({ error: "Mot de passe incorrect" });
                        }
                    })
                    .catch((error) => {
                        
                        res.status(500).json({ error: error.message });
                    });
            } else {
                
                res.status(404).json({ error: "Utilisateur non trouvé" });
            }
        }
    });
}

