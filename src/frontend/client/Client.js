import React, { Component } from "react";
import { JunctionActiveChild } from "react-junctions";
import { withStyles } from "material-ui/styles";

import Header from "./header/Enhance/withStyles";

const styles = theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
    marginLeft: "160px",
    },
    marginLeft: "0px",
  },
})

class Authentication extends Component {
  renderContent() {
    let junction = this.props.junction;
    let Component =
      junction.activeChild &&
      junction.activeChild.component;
    if (!Component) {
      return <h2>404: お探しのページはありません</h2>;
    } else {
      return <JunctionActiveChild junction={junction} />;
    }
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <Header />
        <div className={classes.container}>
          {this.renderContent()}
        </div>
        {/* <JunctionActiveChild junction={this.props.junction} /> */}
      </div>
    );
  }
}

export default withStyles(styles)(Authentication);
