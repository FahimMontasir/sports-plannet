import { Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsHeading from '../DetailsHeading/DetailsHeading';
import './DetailsPage.css'
const DetailsPage = () => {
  const { idLeague } = useParams();
  const [detail, setDetail] = useState([]);
  const { strLeague, strLogo, strBanner } = detail[0] || detail;
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
      .then(res => res.json())
      .then(data => setDetail(data.leagues))
  }, [idLeague])
  console.log(detail[0])
  return (
    <div>
      <DetailsHeading strBanner={strBanner} strLogo={strLogo}></DetailsHeading>
      <div className="detail-body">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Paper>xs=12</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>xs=12</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DetailsPage;