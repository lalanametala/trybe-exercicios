import './App.css';
import Form from './components/Form';
import React, { Component } from 'react';
import Resume from './components/Resume';

const STATE_OBJ = {
      resume: {},
      isFilled: false
    };

class App extends Component {
  constructor() {
    super();
    this.state = STATE_OBJ;
  }

  renderResume = (data) => {
    this.setState({
      resume: data,
      isFilled: true})
  }

  clickHandler = () => {
    this.setState(STATE_OBJ);
  }

  render() {
    return (
      <>
        <Form clickHandler={this.clickHandler} addResume={this.renderResume} />
        {this.state.isFilled && <Resume currentState={this.state.resume} />}
      </>
    );
  }  
}

export default App;
