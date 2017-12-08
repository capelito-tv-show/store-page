
function blogs(state = [], action) {
  switch (actio.type) {
    case 'BLOGS_RECEIVE_DATA' :
      let blogs = []
      if (action.data) {
        Object.keys(action.data).forEach(key => {
          let blog = action.data[key];
          blogs.push({
            key: key,
            text: blog.text,
            completed: blog.completed,
          })
        });
      } return [...blogs]
  }
}
