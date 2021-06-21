import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import backgroundImage from '../images/bg.jpg';



const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />

        <div className={classes.backdrop} />
        <div className={classes.background} />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Upgrade your Sundays
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
        </Typography>
        <Typography variant="body2" color="inherit" className={classes.more}>
          Discover the experience
        </Typography>
      </Container>
    </section>
    
  );

  // return (
  //   <ProductHeroLayout backgroundClassName={classes.background}>
  //     {/* Increase the network loading priority of the background image. */}
  //     <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      // <Typography color="inherit" align="center" variant="h2" marked="center">
      //   Upgrade your Sundays
      // </Typography>
      // <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      //   Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      // </Typography>
      // <Typography variant="body2" color="inherit" className={classes.more}>
      //   Discover the experience
      // </Typography>
  //   </ProductHeroLayout>

  // );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);