import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Typography from './Typography';
import ReactPlayer from 'react-player';
import backgroundImage from '../images/bg-terrex-compressed.mp4';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const styles = (theme) => ({
	root: {
		color: theme.palette.common.white,
		// display: 'flex',
    alignItems: 'center',
		position: 'relative',
		'& video': {
			objectFit: 'cover',
		},
    [theme.breakpoints.down('xs')]: {
			height: '50vh',
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
	title: {
		color: 'white'
	}
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
				<Container className={classes.container}>
				<div className={classes.overlay}>
					<Box
						height="100%"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						color="#fff"
					>
						<Typography variant="h3" className={classes.title}>
							Hi, I'm Lee Ping.
						</Typography>
						<Typography variant="h5" className={classes.title}>
							This is a showcase of stuff I build.
						</Typography>
					</Box>
				</div>
				</Container>
      </section>
    );
}
  
Hero.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);

