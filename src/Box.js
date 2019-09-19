import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div className="box"
        style={{
          backgroundColor: this.props.color,
          width: this.props.width,
          height: this.props.height
        }}>
      </div>
    );
  }
}
export default Box;