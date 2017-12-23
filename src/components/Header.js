import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/App.css';

import { withStyles } from 'material-ui/styles';

import logo from '../images/brand_logo.png';

const styles = {
  logo: {

  }
}


class Header extends Component {
  render() {
    return (
      <header className="global">

        <div className="header">
          <h1>
            <Link to="/" >
              <img src={logo} className="logo" alt="珈琲工房すがの" />
            </Link>
          </h1>
          <nav className="megaNav">
            <ul>
              <li><Link to="/Menu">Menu</Link></li>
              <li><Link to="/Access">Access</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Blog">Shop</Link></li>
              {/* <li className="phone">お問い合わせ：054-2574-5920</li>
              <li className="address">静岡県静岡市葵区東草深町</li> */}
            </ul>

            <div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
