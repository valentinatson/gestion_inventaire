import React, { useState } from 'react';
import style from './PageInventaire.module.css'

const Switch = ({ isOn, handleToggle }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <span className="slider round"></span>
    </label>
  );
};

const PageInventaire = () => {
  const [showInventory, setShowInventory] = useState(true);
  const [showSales, setShowSales] = useState(false);

  const toggleView = () => {
    setShowInventory(!showInventory);
    setShowSales(!showSales);
  };


  const supplyItems = [
    { name: 'Article 1', quantity: 10, totalPrice: 100, sellerName: 'Tomety', category: 'Category 1', date: '2024-03-25T10:00:00' },
    { name: 'Article 2', quantity: 8, totalPrice: 120, sellerName: 'Adotevi-Moevi', category: 'Category 2', date: '2024-03-25T13:30:00' },
    { name: 'Article 3', quantity: 5, totalPrice: 50, sellerName: 'Gbelagnon', category: 'Category 1', date: '2024-04-01T10:00:00' },
    { name: 'Article 4', quantity: 6, totalPrice: 72, sellerName: 'Kpade', category: 'Category 2', date: '2024-04-01T13:30:00' },

  ];

  const salesItems = [
    { name: 'Article 1', quantity: 5, unitPrice: 20, totalPrice: 100, date: '2024-03-26T12:00:00', sellerName: 'Atson', category: 'Category 1' },
    { name: 'Article 2', quantity: 3, unitPrice: 30, totalPrice: 90, date: '2024-03-29T14:00:00', sellerName: 'Tanan', category: 'Category 2' },
    { name: 'Article 3', quantity: 2, unitPrice: 25, totalPrice: 50, date: '2024-04-02T12:00:00', sellerName: 'Conombo', category: 'Category 1' },

  ];


  const groupItemsByWeek = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      const weekStartDate = new Date(item.date);
      weekStartDate.setDate(weekStartDate.getDate() - weekStartDate.getDay());
      const weekEndDate = new Date(weekStartDate);
      weekEndDate.setDate(weekEndDate.getDate() + 6);

      const weekKey = `${weekStartDate.toISOString().split('T')[0]}_${weekEndDate.toISOString().split('T')[0]}`;
      if (!groupedItems[weekKey]) {
        groupedItems[weekKey] = [];
      }
      groupedItems[weekKey].push(item);
    });
    return groupedItems;
  };

  const groupedSupplyItems = groupItemsByWeek(supplyItems);
  const groupedSalesItems = groupItemsByWeek(salesItems);

  return (
    <div className={style.inventaire}>
      <h2>Approvisionnement et Ventes</h2>
      <p>
        Voir
        <button onClick={toggleView} className={style.btn}>
          {showInventory ? 'Ventes' : 'Provisions'}
        </button>
      </p>
      {showInventory && (
        <div className={style.history}>
          <h3 className={style.historyTitle}>Approvisionnement</h3>
          {Object.entries(groupedSupplyItems).map(([weekKey, items]) => (
            <div key={weekKey}>
              <h4 className={style.historyText}>Semaine du {weekKey.split('_')[0]} au {weekKey.split('_')[1]}</h4>
              <table>
                <thead>
                  <tr>
                    <th>Nom de l'article</th>
                    <th>Quantité</th>
                    <th>Prix total</th>
                    <th>Nom du vendeur</th>
                    <th>Catégorie</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.totalPrice}</td>
                      <td>{item.sellerName}</td>
                      <td>{item.category}</td>
                      <td>{new Date(item.date).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
      {showSales && (
        <div>
          <h3 className={style.historyTitle}>Ventes</h3>
          {Object.entries(groupedSalesItems).map(([weekKey, items]) => (
            <div key={weekKey}>
              <h4 className={style.historyText}>Semaine du {weekKey.split('_')[0]} au {weekKey.split('_')[1]}</h4>
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
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.unitPrice}</td>
                      <td>{item.totalPrice}</td>
                      <td>{new Date(item.date).toLocaleString()}</td>
                      <td>{item.sellerName}</td>
                      <td>{item.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageInventaire;
