import React, {Component} from 'react';
import MediaCard from './MediaCard';

class ArticleList extends Component {
  render() {
    const {articles} = this.props;
    let list = []
    articles.map(article => {
      list.push(
        <div>
          <MediaCard
            key={article.key}
            title={article.title}
          />
        </div>
      )
    });

    return(
      <div>{list}</div>
    )
  }
}

export default ArticleList;
