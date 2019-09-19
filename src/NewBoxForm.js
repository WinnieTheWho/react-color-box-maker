import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width:"", height:"", backgroundColor: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      width:"", height:"", backgroundColor: ""
    });
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>

        <label htmlfor="backgroundColor">Background Color: </label>
        <input id="backgroundColor" 
          name="backgroundColor"
          value={this.state.backgroundColor} 
          onChange={this.handleChange}/>
        
        <label htmlfor="width">Width of box: </label>
        <input id="width" 
          name="width"
          value={this.state.width} 
          onChange={this.handleChange}/>
        
        <label htmlfor="height">Height of box: </label>
        <input id="height" 
          name="height"
          value={this.state.height} 
          onChange={this.handleChange}/>

        <button>Add a new box</button>
      </form>
     );
  }
}
 
export default NewBoxForm;