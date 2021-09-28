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
        <Typography variant="h6" className={classes.text}><br />Moc One</Typography>
        {/* <img src="https://1drv.ms/u/s!ApTRF6X05fmIsTpcVX_U1xKah3Yz?e=W5ywOJ" /> */}
        <img src="https://dm2304files.storage.live.com/y4m9dYXCxdTTjxQWgk4HACsMvVBpUYDj2a5Fq29wtnJtePkLvz0OSxWjgVJYCUYmnzexw6m_luLmdXnIY7yBWNeGUE6XtUiFjJwJ9Ez7g0h6syEFAV8GT96o5dwsXTdBGv7_Sz-C3kLXDU7IKMQ3IHfCO9ogboMuJR2GZZVsRciIG1dEEeUkNevKS6mKMwqKO8b?width=4928&height=3264&cropmode=none" />
      </Container>
      <Footer />
    </React.Fragment>

  );
}


export default withStyles(styles)(AboutMe);