import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import '../styles/App.css';
import Header from "./client/shared/view/Header";
import Footer from "./client/shared/view/Footer";
import Home from "./client/home/Home";
// import Menu from './client/menu/Menu';
import MenuSample from "./client/menu/MenuSample";
import Access from "./client/access/Access";
import Gallary from "./client/gallary/Gallary";
import CommercialTransaction from "./client/privacy/about_buisiness";
import News from "./client/articles/News";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="router">
            {/* <Switch> */}
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={MenuSample} />
            <Route path="/access" component={Access} />
            <Route path="/gallary" component={Gallary} />
            <Route path="/Commercial" component={CommercialTransaction} />
            <Route path="/news" component={News} />
            <Footer />
          </div>

          {/* </Switch> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
