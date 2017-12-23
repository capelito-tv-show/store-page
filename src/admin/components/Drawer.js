import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//material-ui
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
        <List>ブログの投稿</List><Divider />
        <List>メニューの編集</List><Divider />
        <List>写真の追加</List><Divider />
      </div>
    );

    return (
      <div>
        <Button
          className={classes.button}
          onClick={this.toggleDrawer('left', true)}
        >
          Menu
        </Button>
        <Drawer
          open={this.state.left}
          onRequestClose={this.toggleDrawer('left', false)}
          >
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
