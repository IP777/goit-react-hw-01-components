import React from 'react';
import style from '../transactionHistory/transactionHistory.module.css';

const transactionHistory = items => {
  const itemsArr = items.items;
  console.log(itemsArr);
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {itemsArr.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default transactionHistory;
