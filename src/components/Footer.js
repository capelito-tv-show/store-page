import React, { Component } from 'react';
import '../styles/App.css'

class Footer extends Component {
  render() {
    return (
      <footer className="">
        <div className="footerIn">
          <ul>
              <li>個人情報保護に関する情報</li>
              <li>特定取引法に関する表示</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
