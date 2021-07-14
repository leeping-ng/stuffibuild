import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar';
import Footer from './Footer';
import isoPaper from '../images/isometric-paper.png';


const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(0),
    backgroundImage: `url(${isoPaper})`,
  },
  overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
	},
  text: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
    fontWeight: 500,
  }
})

function AboutMe(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar />
      
      <Container className={classes.root}>
        <Typography variant="h6" className={classes.text}><br />Under construction</Typography>
      </Container>
      <Footer />
    </React.Fragment>

  );
}


export default withStyles(styles)(AboutMe);