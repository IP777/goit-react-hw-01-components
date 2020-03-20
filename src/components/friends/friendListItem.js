import React from 'react';
import PropTypes from 'prop-types';
import style from './friends.module.css';

const friendsListItem = ({ avatar, name, isOnline }) => (
  <li className={style.item}>
    {isOnline ? (
      <span className={style.online}></span>
    ) : (
      <span className={style.offline}></span>
    )}
    <img className={style.avatar} src={avatar} alt={name} width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

friendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default friendsListItem;
