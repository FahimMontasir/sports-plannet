import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
//material ui style
const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px 5px",
    textAlign: "center"
  },
  media: {
    height: 140,
  },
  title: {
    height: '60px',
  },
});

//main component
export default function MediaCard({ league }) {
  const classes = useStyles();
  // object destructuring
  const { strLeague, strSport, idLeague } = league;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {strLeague}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            sports type: {strSport}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detail/${idLeague}`} style={{ margin: '0 auto', textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}>
            Explore
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
