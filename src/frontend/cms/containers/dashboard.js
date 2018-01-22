import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddArticle from '../components/AddArticle';

import {
  loadArticles,
  addArticle,
  updateArticle,
} from '../actions/article';

//Material-ui
import { withStyles } from 'material-ui/styles';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.addArticle = this.addArticle.bind(this);
    this.toggleArticle = this.toggleArticle.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(loadArticles());
  }

  render() {
    const {Articles} = this.props;
    return (
      <div>
        <Header />
        <AddArticle onAddArticle={this.addArticle} />
      </div>
    );
  }

  addArticle(title){
    const {dispatch} = this.props;
    dispatch(addArticle(title))
  }
  toggleArticle(key) {
    const {dispatch} = this.props;
    dispatch(updateArticle(key))
  }
}

const mapStateToProps = (state) => {
  return {
    Articles: state.Articles ? state.Articles : []
  }
}

export default connect(
  mapStateToProps,
)(DashBoard);
