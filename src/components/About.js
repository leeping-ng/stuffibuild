import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import Typography from './Typography';
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
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    
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
    [theme.breakpoints.up('s')]: {
      marginRight: theme.spacing(4),
      },
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  text: {
    textAlign: 'center',
    fontWeight: 400
  },
  button: {
    marginTop: theme.spacing(8),
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
                Building stuff with LEGO is my hobby. Professionally, I am an AI engineer
                specialising in computer vision. Formerly, I was a mechanical engineer designing
                vehicles, transmissions and robots. So, I build stuff at work too!
              </Typography>
              <Button
                color="primary"
                size="large"
                variant="contained"
                className={classes.button}
                component="a"
                href="/premium-themes/onepirate/sign-up/"
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
                alt="suitcase"
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