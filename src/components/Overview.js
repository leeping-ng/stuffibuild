import React from 'react';

import AppBar from './AppBar';
import Footer from './Footer';
import { withStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DesignsInfo from './DesignsInfo';

const styles = (theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
});



function Gallery(props) {
    const { classes } = props;

  return (
    <React.Fragment>
      <AppBar />
      <div>
          <h2>Hello</h2>
      </div>
      <Timeline align="alternate">
        {DesignsInfo.map((design) => (
            <TimelineItem>
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                {design.date}
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot>
                {/* {<FastfoodIcon />} */}
                {design.icon}
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                    {design.name}
                </Typography>
                <Typography>
                    {design.descr}
                </Typography>
                <img src={design.image} alt={design.name} />
            </Paper>
            </TimelineContent>
        </TimelineItem>
        ))};
        </Timeline>
      <Footer />
    </React.Fragment>

  );
}

export default withStyles(styles)(Gallery);