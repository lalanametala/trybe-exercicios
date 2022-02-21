import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick() {
    await this.setState((previousState, _props) => ({
      numeroDeCliques: previousState.numeroDeCliques +1
    }))
    console.log(this.state.numeroDeCliques)
    if (this.state.numeroDeCliques % 2 === 0) {
      console.log('verde')
    }
  }
  render() {
    return (<><button onClick={this.handleClick}>BUTAUM</button><p>{this.state.numeroDeCliques}</p></>)
  }
}

export default App;
