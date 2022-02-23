import React, { Component } from "react";

class Option extends Component {
  render() {
    const { value, text, key } = this.props;
    return(
      <option 
        value={value}
        key={key}>
        {text}
      </option>
    )
  }
}

export default Option;