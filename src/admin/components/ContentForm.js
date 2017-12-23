import React, { Component } from 'react';

import Header from '../components/Header';


class ContentForm extends Component {

  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  render() {
    return (
      <form>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}


export default ContentForm;
