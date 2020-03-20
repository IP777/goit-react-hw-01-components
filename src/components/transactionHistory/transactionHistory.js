import React from 'react';
import PropTypes from 'prop-types';
import style from '../transactionHistory/transactionHistory.module.css';

const transactionHistory = items => {
  const itemsArr = items.items;
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

transactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default transactionHistory;
