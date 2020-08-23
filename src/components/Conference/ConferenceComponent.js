import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
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
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ConferenceComponent = ({conference}) => {
  console.log(conference);
  const classes = useStyles();

  const markup = (data) => {
    return (
      <Grid item key={data.name} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={data.image.url}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {conference.name}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {conference.slogan}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h3" align="center" color="textSecondary" paragraph>
            Speakers
          </Typography>
          <Grid container spacing={4}>
            {conference.speakers.map((speaker) => (
             markup(speaker)
            ))}
          </Grid>
          <Typography variant="h3" align="center" color="textSecondary" paragraph>
            Organizers
          </Typography>
          <Grid container spacing={4}>
            {conference.organizers.map((organizer) => (
              markup(organizer)
            ))}
          </Grid>
          <Typography variant="h3" align="center" color="textSecondary" paragraph>
            Sponsors
          </Typography>
          <Grid container spacing={4}>
            {conference.sponsors.map((sponsor) => (
              markup(sponsor)
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default ConferenceComponent;