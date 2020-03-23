import React from 'react';
import PropTypes from 'prop-types';
import style from '../SocialProfile/SocialProfile.module.css';

const SocialProfile = ({ name, tag, location, avatar, stats }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img src={avatar} alt={name} className={style.avatar} />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
    </div>

    <ul className={style.stats}>
      <li className={style.item}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

SocialProfile.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  location: 'undefine',
};

SocialProfile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default SocialProfile;
