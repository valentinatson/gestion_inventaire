import React, { useState } from 'react';
import style from './PageArticle.module.css'; 
import AddArticle from '../AddArticle/AddArticle';

const PageArticle = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForms, setShowEditForms] = useState({});

  const handleAddArticle = () => {
    setShowAddForm(!showAddForm);
  };

  const handleEditArticle = (index) => {
    setShowEditForms(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  
  const articles = [
    { category: 'Category 1', name: 'Article 1', quantity: 10, buyPrice: 10, sellPrice: 20 },
    { category: 'Category 1', name: 'Article 2', quantity: 5, buyPrice: 15, sellPrice: 25 },
    { category: 'Category 1', name: 'Article 2', quantity: 5, buyPrice: 15, sellPrice: 25 },
    { category: 'Category 1', name: 'Article 2', quantity: 5, buyPrice: 15, sellPrice: 25 },
    { category: 'Category 2', name: 'Article 3', quantity: 8, buyPrice: 12, sellPrice: 22 },
    { category: 'Category 2', name: 'Article 4', quantity: 15, buyPrice: 8, sellPrice: 18 },
    { category: 'Category 2', name: 'Article 4', quantity: 15, buyPrice: 8, sellPrice: 18 },
    { category: 'Category 2', name: 'Article 4', quantity: 15, buyPrice: 8, sellPrice: 18 },
    
  ];

  
  const uniqueCategories = [...new Set(articles.map(article => article.category))];

  return (
    <div>
      <button className={style.btn} onClick={handleAddArticle}>Ajouter</button>
      {showAddForm && <AddArticle />}
      {uniqueCategories.map(category => (
        <div key={category} className={style.article}>
          <h2>{category}</h2>
          <div className={style.grid}>
            {articles
              .filter(article => article.category === category)
              .map((article, index) => (
                <div key={index} className={style.card}>
                  <h3>{article.name}</h3>
                  <p>Quantity: {article.quantity}</p>
                  <p>Buy Price: {article.buyPrice}</p>
                  <p>Sell Price: {article.sellPrice}</p>
                  <div className={style.buttonContainer}>
                    <button className={style.updateBtn} onClick={() => handleEditArticle(index)}>Modifier</button>
                    <button className={style.deleteBtn}>Supprimer</button>
                  </div>
                  {showEditForms[index] && <AddArticle />}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageArticle;
