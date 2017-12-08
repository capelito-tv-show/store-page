import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


import logo from '../images/brand_logo.png';

class Header extends Component {
  render() {
    return (
      <header className="global">

        <div className="header">
          <h1>
            <a>
              <img src={logo} className="logo" alt="珈琲工房すがの" />
            </a>
          </h1>
          <nav className="megaNav">
            <ul>
              <li><Link to="/" >珈琲工房すがの</Link></li>
              <li><Link to="/Menu">Menu</Link></li>
              <li><Link to="/Access">ACCESS</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li>SHOP</li>
              <li className="phone">お問い合わせ：054-2574-5920</li>
              <li className="address">静岡県静岡市葵区東草深町</li>
            </ul>

            <div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
