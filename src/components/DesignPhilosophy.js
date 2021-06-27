import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import isoPaper from '../images/isometric-paper.png';


const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'absolute',
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
  isoPaper: {
    pointerEvents: 'none',
    position: 'relative',
    opacity: 0.5,
    top: 100,
    // backgroundImage: `url(${isoPaper})`,
    backgroundSize: 'contain'
    // top: -180,
    // width: '100%',
    // zIndex: 0,
  },
});

function DesignPhilosophy(props) {
  const { classes } = props;

  return (
    
    <section className={classes.root}>
      
      <div style = {{ height: 800, backgroundImage: `url(${isoPaper})` }} />
  
      <Container className={classes.container}>
        
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                The best luxury hotels
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
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                New experiences
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
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Exclusive rates
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