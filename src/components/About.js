import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import isoPaper from '../images/isometric-paper.png';



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
  text: {
    textAlign: 'center',
  }
});

function About(props) {
  const { classes } = props;

  return (
    
    <section className={classes.root} >
      <div className={classes.overlay} />
      
      <Container className={classes.container}>
        
      </Container>

 </section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);