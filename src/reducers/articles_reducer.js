function Articles(state=[], action) {
  switch(action.type) {
    case 'ARTICLES_RECEIVE_DATA':
      let articles = []
      if (action.data) {
        Object.keys(action.data).forEach(key => {
          let article = action.data[key];
          article.push({
            key: key,
            title: article.title,
            content: article.content,
          })
        })
      }
      return [ ...articles ]

      case 'ARTICLES_RECIVE_ERROR':
        alert (action.message)

  }
}

export default Articles;
