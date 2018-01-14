
function Articles(state=[], action) {
  switch(action.type) {
    case 'ARTICLES_RECEIVE_DATA':
      let articles = []
      if (action.data) {
        Object.keys(action.data).forEach(key => {
          let article = action.data[key];
          articles.push({
            key: key,
            title: article.title,
          })
        })
      }
      return [ ...articles ]

      case 'ARTICLES_RECIVE_ERROR':
      case 'ADD_TASK_ERROR':
      case 'UPDATE_TASK_ERROR':
      case 'DELETE_TASK_ERROR':
        alert(action.message)

      case 'ADD_ARTICLE':
      return [
        ...state,
        {
          key: action.data.key,
          title: action.data.title,
        }
      ]

      case 'CHANGE_ARTICLE':
        state.map(article => {
          if(article.key === action.data.key){
            article.completed = !article.completed;
          }
        });
        return [
          ...state
        ]

      case 'DELETE_ARTICLE':
        let n = state.filter(article => article.key !== action.data.key)
        return [
          ...n
        ]

      default:
        return state
    }
  }

export default Articles;
