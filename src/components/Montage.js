import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import DesignInfo from './DesignInfo';


const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '47%',
      height: 150,
    },
    [theme.breakpoints.up('sm')]: {
      width: '48%',
      height: 250,
    },
    [theme.breakpoints.up('md')]: {
      width: '31%',
      minHeight: 250,
    },
    [theme.breakpoints.up('lg')]: {
      width: '24%',
      minHeight: 250,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    // '&:hover $imageTitle': {
    //   border: '4px solid currentColor',
      
    //   borderRadius: 8
    // },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 8,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    borderRadius: 8,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 2,
    width: 50,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: 10,
    left: 'calc(50% - 25px)',
    transition: theme.transitions.create('opacity'),
  },

});

function ProductCategories(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <div className={classes.images}>
        {DesignInfo.map((design) => (
          
          <ButtonBase
            key={design.name}
            className={classes.imageWrapper}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${design.image})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <Link to={design.path}>
              <div className={classes.imageButton}>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {design.name}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
            </Link>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);