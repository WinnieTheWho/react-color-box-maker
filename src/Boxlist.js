import React, { Component } from 'react';
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";

class Boxlist extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] }

    this.addBox = this.addBox.bind(this);
  }

  renderBoxes() {
    return (
      <div className="bigOuterBox">
      {this.state.boxes.map(
          b => (
            <div key={b.id} style={{
              backgroundColor: this.props.color,
              width: this.props.width,
              height: this.props.height
            }}>>
            </div>
          )
        )
      }
      </div>
    )
  }

  addBox(box) {
    let newBox = { ...box, id: uuid() };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }

  render() {
    return (
      <div className="BoxList">
        <NewBoxForm addBox={this.addBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default Boxlist;