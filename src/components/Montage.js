import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import firstMoc from '../images/1-first-moc.jpg';
import hondaCivic from '../images/2-honda-civic.jpg';
import walkingCrab from '../images/3-walking-crab.jpg';
import crawler from '../images/4-4x4-crawler.jpg';
import tukTuk from '../images/5-tuk-tuk.jpg';
import lsv1 from '../images/6-LSV-1.jpg';
import gatlingGun from '../images/7-gatling-gun.jpg';
import lsv2 from '../images/8-LSV-2.jpg';
import namePlate from '../images/9-name-plate.jpg';
import towerCrane from '../images/10-tower-crane.jpg';
import droneTransporter from '../images/11-drone-transporter.jpg';
import trackedTransmission from '../images/12-tracked-transmission.jpg';
import porsche911 from '../images/13-porsche-911.jpg';
import terrex from '../images/14-terrex.jpg';
import mindstormsRobotank from '../images/15-mindstorms-robotank.jpg';
import facialRecognitionBox from '../images/16-facial-recognition-box.jpg';


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
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
      borderRadius: 8
    },
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
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url: facialRecognitionBox,
      title: 'Facial Recognition Box'
    },
    {
      url: mindstormsRobotank,
      title: 'Robotank'
    },
    {
      url: terrex,
      title: '8x8 Terrex'
    },
    {
      url: porsche911,
      title: 'Porsche 911'
    },
    {
      url: trackedTransmission,
      title: 'Tracked Vehicle Transmission'
    },
    {
      url: droneTransporter,
      title: 'Drone Transporter'
    },
    {
      url: towerCrane,
      title: 'Tower Crane'
    },
    {
      url: namePlate,
      title: 'Name Plate'
    },
    {
      url: lsv2,
      title: 'Light Strike Vehicle II'
    },
    {
      url: gatlingGun,
      title: 'Gatling Gun'
    },
    {
      url: lsv1,
      title: 'Light Strike Vehicle I'
    },
    {
      url: tukTuk,
      title: 'Tuk Tuk'
    },
    {
      url: crawler,
      title: '4x4 Crawler'
    },
    {
      url: walkingCrab,
      title: 'Walking Crab'
    },
    {
      url: hondaCivic,
      title: 'Honda Civic'
    },
    {
      url: firstMoc,
      title: 'Sports Car'
    },

  ];

  return (
    <Container className={classes.root} component="section">
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
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