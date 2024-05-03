import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddSell from '../AddSell/AddSell';
import style from './PageSell.module.css'

const PageSell = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [soldItems, setSoldItems] = useState([]);

  useEffect(() => {
    fetchSoldItems();
  }, []);

  const fetchSoldItems = () => {
    axios.get("http://localhost:5000/sell/get")
      .then(response => {
        setSoldItems(response.data.sells);
      })
      .catch(error => {
        console.error("Error fetching sold items:", error);
      });
  };

  const handleAddSell = () => {
    setShowAddForm(!showAddForm);
  };

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
          </tr>
        </thead>
        <tbody>
          {soldItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name_article}</td>
              <td>{item.quantity}</td>
              <td>{item.unit_price}</td>
              <td>{item.total_price}</td>
              <td>{item.date_sell}</td>
              <td>{item.name_user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageSell;
