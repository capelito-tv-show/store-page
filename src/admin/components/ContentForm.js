import React, { Component } from 'react';
import trim from 'trim';
import firebase from 'firebase';
import { firebaseDb,  } from '../Firebase';

class ContentForm extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: '',
    };
  }

  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(e.target.value)
      });
      this.setState({
        message: ''
      });
    }
  }

  render() {
    return (
      <from>
        <textarea
          className="tectarea"
          placeholder="Type a message"
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          value={this.state.message}
        >
        </textarea>
        <button type="submit" />
      </from>
    );
  }
}


export default ContentForm;
