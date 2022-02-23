import React, { Component } from "react";

class Option extends Component {
  render() {
    const { value, text, keyNum } = this.props;
    return(
      <option 
        value={value}
        key={keyNum}
      >
        {text}
      </option>
    )
  }
}

export default Option;