import React, { Component } from "react";
import { Link } from "react-junctions";
import "../../styles/Header.css";
import "../../styles/App.css";

import logo from "../images/brand_logo.png";

class Header extends Component {
  render() {
    return (
      <header className="global">
        <div className="header">
          <h1>
            <Link href="/">
              <img src={logo} className="logo" alt="珈琲工房すがの" />
            </Link>
          </h1>
          <nav className="megaNav">
            <ul>
              <li>
                <Link href="/Blog">
                  <span>News</span>
                  <ol />
                  <span className="subNav">最近のニュース</span>
                </Link>
              </li>
              <li>
                <Link href="/Menu">
                  Menu<br />
                  <span className="subNav">喫茶メニュー</span>
                </Link>
              </li>
              <li>
                <Link href="/Blog">
                  <span>Coffee</span>
                  <br />
                  <span className="subNav">珈琲豆のリスト</span>
                </Link>
              </li>
              <li>
                <Link href="/Blog">
                  <span>Purchase</span>
                  <br />
                  <span className="subNav">珈琲豆のご購入</span>
                </Link>
              </li>
              <li>
                <Link href="/Access">
                  <span>Access</span>
                  <br />
                  <span className="subNav">お店のご案内</span>
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
