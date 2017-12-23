import React from 'react';
import PropTypes from 'prop-types';

import Drawer from './Drawer';
//material-ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import CircularIndeterminate from './Interminate';


const styles = {
  root: {
    width: '100%',
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
          <Drawer />
        </Toolbar>
      
      </AppBar>

    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
