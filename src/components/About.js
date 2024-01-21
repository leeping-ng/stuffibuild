import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import portrait from '../images/portrait.png';
import isoPaper from '../images/isometric-paper.png';



const styles = (theme) => ({
  root: {
    display: 'block',
    overflow: 'hidden',
    backgroundImage: `url(${isoPaper})`,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      fontSize: '1.25rem'
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      fontSize: '2.0rem'
    },

  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 200,
    [theme.breakpoints.down('xs')]: {
      height: 150,
    },
  },

  text: {
    textAlign: 'center',
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.0rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem'
    },
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(4),
    },

  },
});

function About(props) {
  const { classes } = props;

  return (

    <section className={classes.root} >
      <div className={classes.overlay} />

      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <div className={classes.item}>
              <Typography variant="h6" className={classes.text}>
                I'm passionate about engineering and building stuff, both at work and as a hobby.
                Most of my earlier designs on this website involve LEGO Technic and are of
                vehicles, robots, and machines. In recent years, I started including my software
                and AI projects as well. Enjoy!
                <span role="img" aria-label="smile"> 😃</span>
              </Typography>
              <Button
                color="primary"
                size="large"
                variant="contained"
                className={classes.button}
                component={Link}
                to="/about"
              >
                About Me
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={portrait}
                alt="Me"
              />
            </div>
          </Grid>
        </Grid>
      </Container>

    </section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);