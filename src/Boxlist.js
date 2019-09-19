import React, { Component } from 'react';
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";
import Box from "./Box";


class Boxlist extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] }
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  renderBoxes() {
    return (
      <div className="bigOuterBox">
      {this.state.boxes.map(
          b => (
            <Box backgroundColor={b.backgroundColor} 
            width={b.width} 
            height={b.height}
            id={b.key}
            key={b.key}
            removeBox={this.removeBox}/>
          )
        )
      }
      </div>
    )
  }

  addBox(box) {
    let newBox = { ...box, key: uuid() };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }

  removeBox(key) {
    let newBoxList = this.state.boxes.filter(
      box => (box.key !== key)
    )
    this.setState({ boxes: newBoxList})
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