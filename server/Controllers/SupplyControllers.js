/* const dataBase = require("../Config/mysql");

exports.addSupply = (req, res) => {
    console.log(req.headers);
    dataBase.query(
      "INSERT INTO supply (nom_article, quantity, id_user) VALUES (?,?,?)",
      [req.body.nomArticle, req.body.quantite, req.id_user],
      (error, result) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(200).json({ id: result.insertId });
        }
      }
    );
  };
 */

const dataBase = require("../Config/mysql");

exports.addSupply = (req, res) => {
    console.log(req.headers);
    // Récupérer l'ID de l'article en fonction du nom de l'article
    dataBase.query(
      "SELECT id_article FROM article WHERE name_article = ?",
      [req.body.nomArticle],
      (error, result) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          const id_article = result[0].id_article;
          // Insérer l'ID de l'article dans la table supply
          dataBase.query(
            "INSERT INTO supply (id_article, quantity, id_user) VALUES (?,?,?)",
            [id_article, req.body.quantite, req.id_user],
            (error, result) => {
              if (error) {
                res.status(500).json({ error });
              } else {
                res.status(200).json({ id: result.insertId });
              }
            }
          );
        }
      }
    );
};

exports.getAllSupplys = (req, res) => {
  dataBase.query(
      "SELECT s.*, u.name_user, a.name_article FROM supply s JOIN users u ON s.id_user = u.id_user JOIN article a ON s.id_article = a.id_article",
      (error, results) => {
          if (error) {
              res.status(500).json({ error });
          } else {
              res.status(200).json({ sells: results });
          }
      }
  );
};