import React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const MainComponent = ({conferences} = []) => {

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {conferences.map((conference) => (
          <Grid item key={conference.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {conference.name}
                </Typography>
                <Typography>
                  {conference.slogan}
                </Typography>
              </CardContent>
              <CardActions>
                {`${conference.startDate === conference.endDate? conference.startDate: `${conference.startDate} - ${conference.endDate}`}  ${conference.locations[0]? conference.locations[0].country.name: ""}`}
              </CardActions>
              <Button size="small" color="primary">
                <Link to={`/ui-graphql-api/conference/${conference.id}`}>View</Link>
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};

export default MainComponent;