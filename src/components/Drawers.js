import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = {
  list: {
    padding: 0,
    margin: 20,

  },
  listFull: {
    width: 'auto',
  },
  button: {
    padding: 0,
    margin: 0,
    minWidth: "auto",
  }
};

class Drawers extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>珈琲</List>
        <Divider />
        <List>ケーキセット</List>
        <Divider />
        <List>ddd</List>
        <Divider />
        <List>ddd</List>
      </div>
    );

    const fullList = (
      <div className={classes.listFull}>
        <List>ffff</List>
        <Divider />
        <List>ddd</List>
      </div>
    );

    return (
      <div>
        <Button className={classes.button} onClick={this.toggleDrawer('left', true)} >Menu</Button>
        <Drawer open={this.state.left} onRequestClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Drawers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawers);
