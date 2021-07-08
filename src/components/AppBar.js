import React from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import MuiAppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Clear from "@material-ui/icons/Clear";
import MenuIcon from "@material-ui/icons/Menu";



const styles = (theme) => ({
  muiAppBar: {
    color: theme.palette.common.white,
    background: 'black',
    position: 'fixed',
    elevation: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 500
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
});

function AppBar(props) {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "responsive-menu-id";

  const listItems = [
    {
      title: "Timeline",
      url: "#"
    },
    {
      title: "About Me",
      url: "#"
    }
  ];

  const menuClasses = { paper: classes.appBarMenuPaper };
  const menuPozitions = { vertical: "top", horizontal: "right" };
  return (
    <>
      <div className={classes.spacer} />
      <MuiAppBar
        className={classes.muiAppBar}
        
      >
        <Toolbar>
          <Container
            display="flex!important"
            justifyContent="space-between"
            alignItems="center"
            component={Box}
            maxWidth="xl"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box component="a" className={classes.title}>
                stuffibuild
              </Box>
              <Hidden mdDown implementation="js">
                <div className={classes.right}>
                  {listItems.map((listItem) => (
                    <Link
                      color="inherit"
                      variant="h6"
                      underline="none"
                      className={classes.rightLink}
                      href={listItem.url}
                    >
                      {listItem.title}
                    </Link>
                  )) }
                </div>
              </Hidden>
              <Hidden lgUp implementation="js">
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleMenuOpen}
                  aria-controls={menuId}
                  aria-haspopup="true"
                >
                  <Box
                    component={MenuIcon}
                    // color={theme.palette.white.main}
                    width="2rem!important"
                    height="2rem!important"
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={menuPozitions}
                  id={menuId}
                  keepMounted
                  transformOrigin={menuPozitions}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                  classes={menuClasses}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="1.25rem"
                    paddingRight="1.25rem"
                    paddingBottom="1rem"
                    className={classes.appBarOutlineNone}
                  >
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleMenuClose}
                      aria-controls={menuId}
                      aria-haspopup="true"
                    >
                      <Box
                        component={Clear}
                        width="2rem!important"
                        height="2rem!important"
                      />
                    </IconButton>
                  </Box>
                  <Box
                    component={Divider}
                    marginBottom="1rem!important"
                    marginLeft="1.25rem!important"
                    marginRight="1.25rem!important"
                  />
                  <List>
                    {listItems.map((listItem) => (
                      <ListItem>
                        <Link
                          href={listItem.url}
                        >
                          {listItem.title}
                        </Link>
                        
                      </ListItem>
                    )) }
                  </List>
                </Menu>
              </Hidden>
            </Box>
          </Container>
        </Toolbar>
      </MuiAppBar>
    </>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
