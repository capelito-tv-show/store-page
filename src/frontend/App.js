import React, { Component } from "react";
import Header from "./client/shared/view/Header";
import Footer from "./client/shared/view/Footer";

class App extends Component {
  renderContent() {
    let { junction } = this.props;
    let Component =
      this.props.junction.activeChild &&
      this.props.junction.activeChild.component;
    if (!Component) {
      return <h2>404: お探しのページはありません</h2>;
    } else {
      return <Component page={this.props.junction.activeChild} />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
