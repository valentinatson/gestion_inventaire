const dataBase = require("../Config/mysql");

exports.addArticle = (req, res) => {
    const { categorie, nomArticle, prixAchat, prixVente } = req.body;

    // Récupérez l'id de la catégorie correspondant au nom de la catégorie
    dataBase.query("SELECT id_category FROM category WHERE name_category = ?", [categorie], (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération de l\'ID de catégorie ', error);
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'ID de catégorie depuis la base de données' });
        } else {
            const categoryId = results[0].id_category;

            // Insérez l'article dans la base de données avec l'id de la catégorie correspondante
            dataBase.query("INSERT INTO article (name_article, purchase_price, sale_price, id_category) VALUES (?, ?, ?, ?)",
                [nomArticle, prixAchat, prixVente, categoryId],
                (error, result) => {
                    if (error) {
                        console.error('Erreur lors de l\'insertion de l\'article ', error);
                        res.status(500).json({ error: 'Erreur lors de l\'insertion de l\'article dans la base de données' });
                    } else {
                        // Envoyer une réponse indiquant que l'insertion a réussi
                        res.status(200).json({ message: 'Article inséré avec succès' });
                    }
                });
        }
    });
};


// contrôleur articleController.js

exports.GetArticle = (req, res) => {
    console.log(req.headers);
    dataBase.query("SELECT article.*, category.name_category FROM article INNER JOIN category ON article.id_category = category.id_category", (error, result) => {
        if (error) {
            console.error('Erreur lors de la récupération des informations ', error);
            res.status(500).json({ error: 'Erreur lors de la récupération des informations depuis la base de données' });
        } else {
            // Envoyer les informations en réponse
            res.status(200).json({ articles: result });
        }
    });
};





exports.UpdateArticle = (req, res) => {
    const { id_article } = req.params;
    const { name_article, purchase_price, sale_price, id_category } = req.body;

    dataBase.query(
        "UPDATE article SET name_article = ?, purchase_price = ?, sale_price = ?, id_category = ? WHERE id_article = ?",
        [name_article, purchase_price, sale_price, id_category, id_article],
        (error, result) => {
            if (error) {
                console.error('Erreur lors de la mise à jour de l\'article ', error);
                res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'article' });
            } else {
                res.status(200).json({ message: 'L\'article a été mis à jour avec succès' });
            }
        }
    );
};

exports.DeleteArticle = (req, res) => {
    const { article_id } = req.params;

    dataBase.query(
        "DELETE FROM article WHERE id_article = ?",
        [article_id],
        (error, result) => {
            if (error) {
                console.error('Erreur lors de la suppression de l\'article ', error);
                res.status(500).json({ error: 'Erreur lors de la suppression de l\'article' });
            } else {
                res.status(200).json({ message: 'L\'article a été supprimé avec succès' });
            }
        }
    );
};

