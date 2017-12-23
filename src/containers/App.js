import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

import Home from './Home';
import Menu from './Menu';
import Access from './Access';
import Blog from './Blog';
import Gallary from './Gallary';
import DashBoard from '../admin/containers/dashboard';

class App extends Component {
  render() {
    return (
        <div className="App" >
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/access" component={Access} />
              <Route path="/blog" component={Blog} />
              <Route path="/gallary" component={Gallary} />
              <Route path="/admin" component={DashBoard} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
