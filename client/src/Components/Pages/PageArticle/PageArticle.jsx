import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './PageArticle.module.css'; 
import AddArticle from '../AddArticle/AddArticle';

const PageArticle = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [articlesByCategory, setArticlesByCategory] = useState({});
  const [showEditForm, setShowEditForm] = useState(false); // État pour contrôler l'affichage du formulaire de modification
  const [editArticleId, setEditArticleId] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    axios.get("http://localhost:5000/article/get")
      .then(response => {
        const articles = response.data.articles;
        const articlesGroupedByCategory = groupArticlesByCategory(articles);
        setArticlesByCategory(articlesGroupedByCategory);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des articles:", error);
      });
  };

  const groupArticlesByCategory = (articles) => {
    const groupedArticles = {};
    articles.forEach(article => {
      if (groupedArticles[article.name_category]) {
        groupedArticles[article.name_category].push(article);
      } else {
        groupedArticles[article.name_category] = [article];
      }
    });
    return groupedArticles;
  };

  const handleAddArticle = () => {
    setShowAddForm(!showAddForm);
  };

  const handleEditArticle = (articleId) => {
    setShowEditForm(true); // Afficher le formulaire de modification
    setEditArticleId(articleId);
  };

  const handleDeleteArticle = (article_id) => {
    axios.delete(`http://localhost:5000/article/delete/${article_id}`)
      .then(response => {
        console.log("Article supprimé avec succès");
        fetchArticles();
      })
      .catch(error => {
        console.error("Erreur lors de la suppression de l'article:", error);
      });
  };

  return (
    <div>
      <button className={style.btn} onClick={handleAddArticle}>Ajouter</button>
      {showAddForm && <AddArticle />}

      {Object.entries(articlesByCategory).map(([category, articles]) => (
        <div key={category} className={style.article}>
          <h2>{category}</h2>
          <div className={style.grid}>
            {articles.map((article, index) => (
              <div key={index} className={style.card}>
                <h3>{article.name_article}</h3>
                <p>Buy Price: {article.purchase_price}</p>
                <p>Sell Price: {article.sale_price}</p>
                <div className={style.buttonContainer}>
                  <button className={style.updateBtn} onClick={() => handleEditArticle(article.id_article)}>Modifier</button>
                  <button className={style.deleteBtn} onClick={() => handleDeleteArticle(article.id_article)}>Supprimer</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {showEditForm && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <span className={style.close} onClick={() => setShowEditForm(false)}>&times;</span>
            <AddArticle articleId={editArticleId} onClose={() => setShowEditForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PageArticle;
