
function contents(state = [], action) {
  switch (action.type) {
    case 'CONTENT_RECEIVE_DATA' :
      let contents = []
      if (action.data) {
        Object.keys(action.data).forEach(key => {
          let content = action.data[key];
          contents.push({
            key: key,
            text: content.text,
            completed: content.completed,
          })
        });
      } return [...contents]

    case 'BLOGS_RECIEVE_ERROR':
    case 'ADD_TASK_EERROR':
    case 'UPDATE_TASK_ERROR':
    case 'UPDATE_TASK_ERROR':
    case 'DELETE_TASK_ERROR':
      alert(action.message)


      case 'ADD_CONTENT':
      return [
        ...state,
        {
          key:action.data.key,
          text: action.data.text,
          completed: action.data.completed,
        }
      ]

      case 'CHANGE_CONTENT':
        state.map(content => {
          if(content.key == action.data.key){
            content.completed = !content.completed;
          }
        });
        return [
          ...state
        ]

        case 'DELETE_CONTENT':
        let n = state.filter(content => content.key !== action.data.key)
        return [
          ...n
        ]

        default:
        return state
  }
}

export default contents;
