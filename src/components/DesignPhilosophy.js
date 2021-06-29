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
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
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
              <Typography variant="h6" className={classes.title}>
                LEGO
              </Typography>
              <Typography variant="h5">
                {'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
                {', go for a mini-vacation just a few subway stops away from your home.'}
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
              <Typography variant="h6" className={classes.title}>
                Functional Designs
              </Typography>
              <Typography variant="h5">
                {'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '}
                {'your Sundays will not be alike.'}
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
              <Typography variant="h6" className={classes.title}>
                Minimalism
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
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