import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import backgroundImage from '../images/bg-terrex.mp4';
import Container from '@material-ui/core/Container';


const styles = (theme) => ({
	root: {
		color: theme.palette.common.white,
		display: 'flex',
    alignItems: 'center',
		position: 'relative',
		'& video': {
			objectFit: 'cover',
		},
		[theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
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

function Hero(props) {
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
				<div className={classes.overlay}>
					{/* <Typography color="inherit" align="center" variant="h2" marked="center">
						Upgrade your Sundays
					</Typography> */}
				</div>
      </section>
    );
}
  
Hero.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);

