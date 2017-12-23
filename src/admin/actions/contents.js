import {firebaseDb, firebaseStorage } from '../Firebase/index';
import * as types from '../constants/ActionType';

const ref = firebaseDb.ref('contents');
// const storageRef = firebaseStorage.ref('images');

// Subscribe
export function loadContents() {
  return dispatch => {
    ref.off()
    ref.on('value',
      (snapshot) => {dispatch(loadContentsSuccess(snapshot))},
      (error) => {dispatch(loadContentsError(error))}
    )
  }
}

export function loadContentsSuccess(snapshot){
  return {
    type: 'CONTENTS_RECEIVE_DATA',
    data: snapshot.val()
  }
}

export function loadContentsError(error){
  return {
    type: 'CONTENTS_RECIVE_ERROR',
    message: error.message
  }
}

// CREATE_TASK
export function addContent(text) {
  return dispatch => {
    ref.push({
      text: text,
      completed: false,
    })
    .catch(error => dispatch({
      type: 'ADD_TASK_ERROR',
      message: error.message,
    }));
  }
}

// UPDATE_TASK
export function updateContent(key){
  return (dispatch, getState) => {
    let state = getState()
    let content = state.contents.filter(content => content.key === key)

    firebaseDb.ref(`contents/${key}`).update({completed: !content[0].completed})
    .catch(error => dispatch({
      type: 'UPDATE_TASK_ERROR',
      message: error.message,
    }));
  }
}

// export function addImage() {
//   return(dispatch, getState) => {
//     let file = state.images.
//   }
// }

// DELETE_TASK
export function deleteContent(key){
  return dispatch => {
    firebaseDb.ref(`contents/${key}`).remove()
    .catch(error => dispatch({
      type: 'DELETE_TASK_ERROR',
      message: error.message,
    }));
  }
}
