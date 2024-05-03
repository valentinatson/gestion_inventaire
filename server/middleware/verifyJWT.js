const jwt = require("jsonwebtoken")

module.exports = (req,res,next) => {
    
    try {
        let token = req.headers["authorization"].split(" ")[1];
        
        let verifiedToken = jwt.verify(token, "12345678");
        console.log(verifiedToken);
        req.id_user = verifiedToken.id_user
        
        next();
    } catch (error) {
        res.status(403).json(error)
        console.log("erreur trouve");
    }
}