import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import isoPaper from '../images/isometric-paper.png';
import legoBrick from '../images/lego-brick.png';
import wrench from '../images/wrench.png';
import zenCircle from '../images/zen-circle.png';


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
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
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
    height: 55,
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.0rem'
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
  }
});

function DesignPhilosophy(props) {
  const { classes } = props;

  return (
    
    <section className={classes.root} >
      <div className={classes.overlay} />
      
      <Container className={classes.container}>
        
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={legoBrick}
                alt="suitcase"
              />
              <Typography variant="h4" className={classes.title}>
                LEGO
              </Typography>
              <Typography variant="h6" className={classes.text}>
                LEGO bricks are my paintbrush and canvas. I get inspiration from my daily life,
                and use LEGO to design and build prototypes quickly.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={wrench}
                alt="graph"
              />
              <Typography variant="h4" className={classes.title}>
                Functional
              </Typography>
              <Typography variant="h6" className={classes.text}>
                I design vehicles, robots, and machines. Some are remote controlled,
                some even have an encased Raspberry Pi computer. All of them are functional.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={zenCircle}
                alt="clock"
              />
              <Typography variant="h4" className={classes.title}>
                Minimalist
              </Typography>
              <Typography variant="h6" className={classes.text}>
                I follow the KISS (Keep It Simple, Stupid) principle in my builds, favouring
                compact, clean designs over unnecessary complexity.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

 </section>
  );
}

DesignPhilosophy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DesignPhilosophy);