import React from 'react';
import '../style.module.css';
import SocialProfile from '../components/SocialProfile/SocialProfile';
import SPParam from '../components/SocialProfile/SocialProfile.json';
//-------------------------------------------------------------------
import Statistics from '../components/statistics/statistics';
import statisticsData from '../components/statistics/statistics-data.json';
//-------------------------------------------------------------------
import FriendsList from '../components/friends/friends';
import friendsData from './friends/friends-data.json';
//-------------------------------------------------------------------
import TransactionHistory from './transactionHistory/transactionHistory';
import THData from './transactionHistory/transactionHistory-data.json';

//console.log(THData);

const App = () => (
  <>
    <SocialProfile
      name={SPParam.name}
      tag={SPParam.tag}
      location={SPParam.location}
      avatar={SPParam.avatar}
      stats={SPParam.stats}
    />
    <Statistics title="Upload stats" stats={statisticsData} />
    <FriendsList friends={friendsData} />
    <TransactionHistory items={THData} />
  </>
);

export default App;
