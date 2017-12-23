import React from 'react'

function AddImage() {
  constructor(props) {
    this.state = {
      image: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return() {
      <div>
        <form
          method="post"
        >
          <input
            type="file"
            name="image"
          />
          <input
            type="submit"
          />
        </form>
      </div>
    }
  }
}
