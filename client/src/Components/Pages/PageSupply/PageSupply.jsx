import React, { useState } from 'react';
import style from './PageSupply.module.css';
import AddSupply from '../AddSupply/AddSupply';

const PageSupply = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddSupply = () => {
    setShowAddForm(!showAddForm);
  };

  
  const soldItems = [
    { name: 'Article 1', quantity: 5, totalPrice: 50, date: '2024-04-25', sellerName: 'Labitey' },
    { name: 'Article 2', quantity: 3, totalPrice: 45, date: '2024-04-24', sellerName: 'Afanvi' },
    
  ];

  return (
    <div className={style.sectionSupply}>
      
        <h2>Liste des approvisionnements</h2>
        <button className={style.btn} onClick={handleAddSupply}>{showAddForm ? 'Fermer' : 'Ajouter'}</button>
        {showAddForm && <AddSupply />}
      
        <table>
          <thead>
            <tr>
              <th>Nom de l'article</th>
              <th>Quantité</th>
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

export default PageSupply;
