import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
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
{/*         
        Did this because MocPages went down. I rewriting descrs in 2021, trip down memory lane
        Although it's about stuff i build, this is almost like a blog about my personal life
        Photo resolution and quality
        The thing that hasn't changed is my interest in engineering
        Isometric paper for engineering used in background
        As a reminder to the future myself, halcyon days, continue to build stuff. 
        Picture of LEGO room in Canada*/}
      </Container>
      <Footer />
    </React.Fragment>

  );
}


export default withStyles(styles)(AboutMe);