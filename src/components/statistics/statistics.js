import React from 'react';
import PropTypes from 'prop-types';
import style from '../statistics/statistics.module.css';

const Statistics = ({ title = 'Upload stats%', stats = [] }) => {
  const colorArr = ['#4fc4f6', '#a33cf2', '#e64c65', '#21b8c6', '#21c634'];
  //const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {stats.map((items, index) => (
          <li
            key={items.id}
            className={style.item}
            style={{
              backgroundColor: colorArr[index],
            }}
          >
            <span className={style.label}>{items.label}</span>
            <span className={style.percentage}>{items.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
