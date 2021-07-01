import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'black',
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  copyright: {
    display: 'flex',
  },
  iconWrapper: {
    marginBottom: theme.spacing(3),
    display: 'flex',
  },
  icon: {
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",
    marginRight: theme.spacing(2),
    '&:hover': {
      color: "grey"
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  text: {
    color: "white"
  }
}));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.iconWrapper}>
          <Link href="https://www.youtube.com/channel/UC8LFt8UC7rqnKA0NiF0IBjw/videos" target="_blank">
            <Box
              component={YouTubeIcon}
              className={classes.icon}
            />
          </Link>
          <Link href="https://github.com/leeping-ng" target="_blank">
            <Box
              component={GitHubIcon}
              className={classes.icon}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/lee-ping-ng/" target="_blank">
            <Box
              component={LinkedInIcon}
              className={classes.icon}
            />
          </Link>

        </div>
        <div className={classes.copyright}>
      <Typography className={classes.text}>
          © 2021, Lee Ping Ng
        </Typography>

        </div>

      </Container>

    </section>
  );
}