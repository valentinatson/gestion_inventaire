import React, { useState } from 'react';
import AddSell from '../AddSell/AddSell';
import style from './PageSell.module.css'

const PageSell = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddSell = () => {
    setShowAddForm(!showAddForm);
  };


  const soldItems = [
    { name: 'Article 1', quantity: 5, unitPrice: 10, totalPrice: 50, date: '2024-04-25', sellerName: 'Lawson', category: 'Category 1' },
    { name: 'Article 2', quantity: 3, unitPrice: 15, totalPrice: 45, date: '2024-04-24', sellerName: 'Gavi', category: 'Category 2' },

  ];

  return (
    <div className={style.sellSection}>
      <h2>Liste des ventes</h2>
      <button onClick={handleAddSell} className={style.btn}>{showAddForm ? 'Fermer' : 'Ajouter'}</button>
      {showAddForm && <AddSell />}
      <table>
        <thead>
          <tr>
            <th>Nom de l'article</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>Prix total</th>
            <th>Date</th>
            <th>Nom du vendeur</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {soldItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.totalPrice}</td>
              <td>{item.date}</td>
              <td>{item.sellerName}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageSell;
