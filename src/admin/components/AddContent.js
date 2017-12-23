import React , { Component } from 'react';
import { PropTypes } from 'prop-types';

class AddContent extends Component {

  render(){
    let input;
    return(
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.onAddContent(input.value)
          input.value =''
        }} />
        <input ref={node => {
          input = node
        }} />
        <button type="submit" >
          Add Content
        </button>
      </div>
    )
  }
}


AddContent.propTypes = {
  onAddContent: PropTypes.func.isRequired,
}

export default AddContent;
