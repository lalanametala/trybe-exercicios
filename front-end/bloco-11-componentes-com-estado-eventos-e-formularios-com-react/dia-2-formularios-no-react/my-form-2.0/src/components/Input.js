import React, { Component } from "react";

class InputRender extends Component {
  render() {
    const { name, label, value, handleChange } = this.props;
    return(
      <label htmlFor={name}>
        {`${label}: `} 
        <input 
          name={name}
          value={value}
          type='text'
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default InputRender;