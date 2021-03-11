import { Container, Grid, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsHeading from '../DetailsHeading/DetailsHeading';
import ExploreIcon from '@material-ui/icons/Explore';
import FlagIcon from '@material-ui/icons/Flag';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import WcIcon from '@material-ui/icons/Wc';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import male from '../../Photo/male.png'
import female from '../../Photo/female.png'
import './DetailsPage.css'


const DetailsPage = () => {
  const { idLeague } = useParams();
  const [detail, setDetail] = useState([]);
  const { strLeague, strLogo, strBanner, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube } = detail[0] || detail;
  //img verification
  const maleImg = <img src={male} alt="" />;
  const femaleImg = <img src={female} alt="" />;
  const gender = strGender || '';
  //to fetch data with the clicked idLeague
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
      .then(res => res.json())
      .then(data => setDetail(data.leagues))
  }, [idLeague])

  return (
    <div>
      <DetailsHeading strBanner={strBanner} strLogo={strLogo}></DetailsHeading>
      <div className="detail-body">
        <Grid container className="hero-card">
          <Grid item xs={12} md={6}>
            <h2>{strLeague}</h2>
            <h4><ExploreIcon style={{ fontSize: 15 }} /> Founded: {dateFirstEvent}</h4>
            <h4><FlagIcon style={{ fontSize: 15 }} /> Country: {strCountry}</h4>
            <h4><SportsSoccerIcon style={{ fontSize: 15 }} /> Sport type: {strSport}</h4>
            <h4><WcIcon style={{ fontSize: 15 }} /> Gender: {strGender}</h4>
          </Grid>
          <Grid item xs={12} md={6} className='feature-img'>
            {
              gender.toLowerCase() === "female" ? femaleImg : maleImg
            }
          </Grid>
        </Grid>
        <Container className="description-text">
          <p>{strDescriptionEN}</p>
        </Container>
        <div className="footer-link">
          <IconButton href={`https://${strTwitter}`} target="_blank" >
            <TwitterIcon color="primary" style={{ fontSize: 40 }} />
          </IconButton>

          <IconButton href={`https://${strYoutube}`} target="_blank">
            <YouTubeIcon color="secondary" style={{ fontSize: 40 }} />
          </IconButton>

          <IconButton href={`https://${strFacebook}`} target="_blank" >
            <FacebookIcon color="primary" style={{ fontSize: 40 }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;