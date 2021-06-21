import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import backgroundImage from '../images/bg-terrex.mp4';
import Container from '@material-ui/core/Container';


const styles = (theme) => ({
    background: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center',
    },
		root: {
			width: '100%',
			height: '80vh',
			position: 'relative',
			'& video': {
				objectFit: 'cover',
			},
		},
		overlay: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
		container: {
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(14),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},

  });

function ProductValues(props) {
    const { classes } = props;
  
    return (
      <section className={classes.root}>
          <ReactPlayer
            url={backgroundImage}
            playing
            loop
            muted
            width="100%"
            height="100%"
        	/>
        {/* </Container> */}
      </section>

  
    );
}
  
ProductValues.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);

