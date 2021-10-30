import React from 'react';

import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DesignInfo from '../components/DesignInfo';
import isoPaper from '../images/isometric-paper.png';

const styles = (theme) => ({
	root: {
    display: 'block',
    overflow: 'hidden',
		marginTop: theme.spacing(0),
		marginBottom: theme.spacing(0),
    backgroundImage: `url(${isoPaper})`,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'white',
  },
  heading: {
    display: 'block',
    overflow: 'hidden',
		marginTop: theme.spacing(8),
  },
  overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
	},
  oppositeContent: {
    marginBottom: theme.spacing(2)
  },
  paperImage: {
    display: 'inline-block',
    padding: '6px 10px',
    maxWidth: 300,
    textAlign: 'left',
    marginTop: theme.spacing(0.5),
    '&:hover': {
      backgroundColor: 'rgb(220,220,220)',
      opacity: 0.8
    },
  },
  paperDescr: {
    display: 'inline-block',
    padding: '6px 10px',
    maxWidth: 300,
    textAlign: 'left',
    marginTop: theme.spacing(0.5),
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem'
    },
  },
  descr: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem'
    },
  },
  text: {
    textAlign: 'center',
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.0rem',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      fontSize: '1.25rem'
    },
  },
  

});



function Overview(props) {
    const { classes } = props;

  return (
    <React.Fragment>
      <AppBar />
      <Container className={classes.heading}>
          <Typography variant="h6" className={classes.text}>
            Many of my builds were inspired from encounters in my daily life. Here is the story of my journey since 2011.
          </Typography>
      </Container>
      <section className={classes.root} >
      <div className={classes.overlay} />
      <Timeline >


        {DesignInfo.map((design) => (
          <TimelineItem>
            <TimelineOppositeContent className={classes.oppositeContent}>
              <Typography variant="body2" color="textSecondary">
                {design.date}
              </Typography>
              <Link to={design.path}>
                <Paper elevation={3} className={classes.paperImage}>
                
                  <Typography variant="h6" className={classes.title}>
                    {design.name}
                  </Typography>
                  <img src={design.image} alt={design.name} width='100%'/>

              </Paper>
              </Link>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                {design.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent align='left'>
              <Paper elevation={3} className={classes.paperDescr}>

                <Typography className={classes.descr}>
                    {design.descr}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
        </Timeline>
        </section>
      <Footer />
    </React.Fragment>

  );
}

export default withStyles(styles)(Overview);