import React, { Component } from "react";
import { Link } from "react-junctions";
// import "../../styles/Header.css";
// import "../../styles/App.css";

import logo from "../shared/images/brand_logo.png";

class Header extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <header className={classes.global}>
        <div className={classes.header}>
          <h1 className={classes.h1}>
            <Link href="/Home">
              <img src={logo} className={classes.logo} alt="珈琲工房すがの" />
            </Link>
            <i />
          </h1>
          <nav className={classes.megaNav}>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <Link href="/Home/News/" className={classes.link}>
                  <span>News</span>
                </Link>
              </li>
              <li className={classes.li}>
                <Link href="/Home/Menu/" className={classes.link}>
                  Menu
                </Link>
              </li>
              <li className={classes.li}>
                <Link href="/Home/CoffeeList/" className={classes.link}>
                  <span>Coffee</span>
                </Link>
              </li>
              <li className={classes.li}>
                <Link href="/Home/Blog/" className={classes.link}>
                  <span>Purchase</span>
                </Link>
              </li>
              <li className={classes.li}>
                <Link href="/Home/Access/" className={classes.link}>
                  <span>Access</span>
                </Link>
              </li>
              {/* <li className="phone">お問い合わせ：054-2574-5920</li>
              <li className="address">静岡県静岡市葵区東草深町</li> */}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
