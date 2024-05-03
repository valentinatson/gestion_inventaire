const dataBase = require("../Config/mysql");


exports.CategorySelect = (req, res) => {
    
    
    dataBase.query("SELECT * FROM category ", (error, result) => {
        if (error) {
            console.error('Erreur lors de la récupération des informations ', error);
            res.status(500).json({ error: 'Erreur lors de la récupération des informations depuis la base de données' });
        } else {
            // Envoyer les informations en réponse
            res.status(200).json({ category: result });
        }
    });

};

