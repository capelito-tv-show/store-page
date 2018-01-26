// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// //Material-Ui
// import Grid from 'material-ui/Grid';
// import PropTypes from 'prop-types';
// import Card, { CardContent, CardMedia, CardAction } from 'material-ui/Card';
// import { withStyles } from 'material-ui/styles';
// import '../styles/App.css';
// import Typography from 'material-ui/Typography';
//
// import Header from '../components/Header';
// import MediaCard from '../components/MediaCard';
// import ArticleList from '../components/ArticleList';
// import Footer from '../components/Footer';
//
// import {loadArticles} from '../admin/actions/article';
//
//
// class Blog extends Component {
//   componentDidMount() {
//     const {dispatch} = this.props;
//     dispatch(loadArticles);
//   }
//   render() {
//     const {articles} = this.props;
//     return (
//       <div>
//         <Header />
//         <div className="wrapper">
//           <Grid container spacing={24} justify="left" >
//             <Grid item xs={12} sm={4} md={4}  >
//               <ArticleList
//                 articles={articles}
//               />
//             </Grid>
//           </Grid>
//         </div>
//           <Footer />
//         </div>
//     )}
// };
//
// const mapStateToProps = (state) => {
//   return {
//     articles: state.articles ? state.articles : []
//   }
// }
//
// export default connect(mapStateToProps)(Blog);
