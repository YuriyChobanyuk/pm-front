import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from '../side-menu/SideMenu';
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function TopBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const pageName = pathname.split('/')[1] || 'home';

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {pageName.toUpperCase()}
          </Typography>
        </Toolbar>
      </AppBar>
      <SideMenu hideDrawer={open} toggleDrawer={setOpen} />
    </div>
  );
}
