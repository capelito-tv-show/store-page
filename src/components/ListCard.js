import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  }
});


function ListCard(props) {
  const { classes } = props;
  return (
    <div  className={classes.root}>
      <List>
        <ListItem button>
          <ListItemText primary="セット" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="珈琲" />
        </ListItem>
        <Divider />
      </List>
    </div>

  );
}

ListCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListCard);
