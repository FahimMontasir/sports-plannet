import React, { useEffect, useState } from 'react';
import HomeHeading from '../HomeHeading/HomeHeading';
import MediaCard from '../MediaCard/MediaCard';
import './Home.css'
const Home = () => {
  const [leagues, setLeagues] = useState([])
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
  }, [])
  return (
    <div>
      <HomeHeading></HomeHeading>
      <div className="card-area">
        {
          leagues.map(league => <MediaCard key={league.idLeague} league={league}></MediaCard>)
        }
      </div>
    </div>
  );
};

export default Home;