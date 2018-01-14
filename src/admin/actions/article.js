import firebase from 'firebase'
import { firebaseDb } from '../Firebase/index';
const ref = firebaseDb.ref('articles');


export function loadArticles() {
  return dispatch => {
    ref.off()
    ref.on('value',
    (snapshot) => {dispatch(loadArticlesSuccess(snapshot))},
    (error) => {dispatch(loadArticlesError(error))}
  )
  }
}

export function loadArticlesSuccess(snapshot) {
  return {
    type: 'ARTICLES_RECEIVE_DATA',
    data: snapshot.val()
  }
}

export function loadArticlesError(error){
  return {
    type: 'ARTICLES_RECIVE_ERROR',
    message: error.message
  }
}


// CREATE_TASK
export function addArticle(title){
  return dispatch => {
    ref.push({
      title: title,
      completed: false,
    })
    .catch(error => dispatch({
      type: 'ADD_TASK_ERROR',
      message: error.message,
    }));
  }
}

// UPDATE_TASK
export function updateArticle(key){
  return (dispatch, getState) => {
    let state = getState()
    let article = state.articles.filter(article => article.key === key)

    firebaseDb.ref(`articles/${key}`).update({completed: !article[0].completed})
    .catch(error => dispatch({
      type: 'UPDATE_TASK_ERROR',
      message: error.message,
    }));
  }
}

// DELETE_TASK
export function deleteArticle(key){
  return dispatch => {
    firebaseDb.ref(`articles/${key}`).remove()
    .catch(error => dispatch({
      type: 'DELETE_TASK_ERROR',
      message: error.message,
    }));
  }
}
