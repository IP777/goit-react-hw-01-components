import React from 'react';
import PropTypes from 'prop-types';
import style from './friends.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className={style.item}>
    <span className={isOnline ? style.online : style.offline}></span>
    <img className={style.avatar} src={avatar} alt={name} width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
