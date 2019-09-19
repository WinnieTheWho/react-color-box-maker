import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div className="box"
      style={{
        backgroundColor: this.props.backgroundColor,
        width: this.props.width,
        height: this.props.height
      }}>
        <button onClick={() => this.props.removeBox(this.props.id)}>X</button>
      </div>
    );
  }
}
export default Box;