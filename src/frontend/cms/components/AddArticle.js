import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddArticle extends Component {

  render() {
    let input;
    return (
      <div>
        <from onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.onAddArticle(input.value)
          input.value = ''
        }}>
        <input ref={node => {
            input = node
          }}
        />
          <button type="submit">
            Add Article
          </button>
        </from>
      </div>
    );
  }
}

AddArticle.proptypes = {
  onAddArticle: Proptypes.func.isRequired,
}

export default AddArticle;
