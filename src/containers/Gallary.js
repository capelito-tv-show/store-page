import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import tileData from '../components//tileData';

import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: "auto",
  },
  subheader: {
    width: '100%',
  },
});

function Gallary(props) {
  const { classes } = props;

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <Footer />
    </div>
  );
}

Gallary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallary);
