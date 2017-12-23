import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddContent from '../components/AddContent';
import ContentForm from '../components/ContentForm';

//Material-ui
import { withStyles } from 'material-ui/styles';

//action
import {
  loadContents,
  addContent,
  deleteContent,
  updateContent
} from '../actions/contents';


class DashBoard extends Component {
  constructor() {
    super();
    this.addContent = this.addContent.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    // dispatch(loadContent());
  }

  render() {
    const {contents} = this.props;
    return (
      <div>
        <Header />
        <AddContent
          onAddContent={this.addContent}
        />
      </div>
    );
  }

  addContent(text){
    const { dispatch } = this.props;
    dispatch(addContent(text))
  }
}

const mapStateToProps = (state) => {
  return {
    contents: state.contents ? state.content : []
  }
}

export default connect(
  mapStateToProps,
)(DashBoard);
