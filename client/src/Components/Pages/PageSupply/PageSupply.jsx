import React, { useState } from 'react';
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
    <div>
      <h2>Liste des approvisionnements</h2>
      <button onClick={handleAddSupply}>{showAddForm ? 'Fermer le formulaire' : 'Ajouter un approvisionnement'}</button>
      {showAddForm && <AddSupply />}
      <table>
        <thead>
          <tr>
            <th>Nom de l'article</th>
            <th>Quantité</th>
            <th>Prix total</th>
            <th>Date</th>
            <th>Nom du vendeur</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageSupply;
