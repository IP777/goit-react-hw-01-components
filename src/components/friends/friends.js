import React from 'react';
import style from './friends.module.css';
import FriendListItem from './friendListItem';
import PropTypes from 'prop-types';

const friendsList = friends => {
  const friendsArr = friends.friends;
  return (
    <ul className={style.friendList}>
      {friendsArr.length > 0 ? (
        friendsArr.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))
      ) : (
        <li>
          <p>Ups you have not friends</p>
        </li>
      )}
    </ul>
  );
};

friendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default friendsList;
