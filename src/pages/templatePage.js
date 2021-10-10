import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';


import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import isoPaper from '../images/isometric-paper.png';


const styles = (theme) => ({
	heading: {
		display: 'block',
    overflow: 'hidden',
		marginTop: theme.spacing(12),
	},
	root: {
    display: 'block',
    overflow: 'hidden',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(0),
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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
	image: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
	iframeContainer: {
		position: 'relative',
		overflow: 'hidden',
		width: '100%',
		paddingTop: '56.25%', /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
	},
	iframeResponsive: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		width: '100%',
		height: '100%'
	},
	card: {
    display: 'flex',
    flexDirection: 'column',
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: theme.spacing(0, 0),
		marginBottom: theme.spacing(2),
  },
	title: {
		display: 'flex',
    flexDirection: 'column',
		fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.0rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem'
    },
  },
	creationDate: {
		display: 'flex',
    flexDirection: 'column',
		fontWeight: 400,
		marginBottom: theme.spacing(4)
	},
	creationDescr: {
		fontWeight: 400,
		marginBottom: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
      fontSize: '1.0rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem'
    },
	},
  text: {
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.0rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem'
    },
  },
	shadow: {
		boxShadow: 10,
		display: "block"
	},
	chip: {
		marginRight: theme.spacing(1),
		marginBottom: theme.spacing(1),
		fontWeight: 550
	}
})

function templatePage(props) {
  const { classes, pageName, creationDate, creationDescr, creationChips, info, icon } = props;
  return (
    <React.Fragment>
      <AppBar />
			<Container className={classes.heading}>
				<Grid container direction="row" alignItems="center" spacing={1}>
					<Grid item>
						{icon}
					</Grid>
					<Grid item>
						<Typography variant="h1" className={classes.title}>{pageName}</Typography>
					</Grid>
				</Grid>
					<Divider />
					<Typography variant="h6" className={classes.creationDate}>{creationDate}</Typography>
					<Typography variant="h6" className={classes.creationDescr}>{creationDescr}</Typography>
					{creationChips.map((chip) => <Chip className={classes.chip} label={chip} />)}
			</Container>
      <section className={classes.root} >
				
				<div className={classes.overlay} />
				<Container className={classes.container}>
					
				<Grid container>
					{info.map((info) => (
						
							<Grid item xs={12} md={6} className={classes.image}>
								<Box>
								{info.type==="Photo" 
								?
									(<img src={info.url} width="100%" alt={info.name}/>)
								:
									(<div className={classes.iframeContainer}>
										<iframe 
											title={info.name}
											className={classes.iframeResponsive} 
											src={info.url} 
											frameborder="0" 
											allowfullscreen>
										</iframe>
									</div>)
								}
								<Card className={classes.card}>
									<CardContent>
	
										<Typography className={classes.text}>
											{info.descr}
										</Typography>
										
									</CardContent>
								</Card>
								</Box>
							</Grid>
					))}
					</Grid>
					
				</Container>
			</section>
      <Footer />
    </React.Fragment>

  );
}



export default withStyles(styles)(templatePage);