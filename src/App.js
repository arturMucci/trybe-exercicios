import { Component } from 'react';
import './App.css';

const init = {
  clicksBtn1: 0,
  clicksBtn2: 0,
  clicksBtn3: 0,
}

class App extends Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem('state')) || init;
  }

  handleClick1 = () => {
    this.setState((prev) => ({
      clicksBtn1: prev.clicksBtn1 + 1,
    }))

  }

  handleClick2 = () => {
    this.setState((prev) => ({
      clicksBtn2: prev.clicksBtn2 + 1,
    }))
  }

  handleClick3 = () => {
    this.setState((prev) => ({
      clicksBtn3: prev.clicksBtn3 + 1,
    }))
  }

  chooseColor = (act) => {
    return act % 2 === 0 ? 'green' : 'rgb(239, 239, 239)';
  }

  clear = () => {
    this.setState(() => init);
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  render() {
    localStorage.setItem('state', JSON.stringify(this.state));
    const {clicksBtn1, clicksBtn2, clicksBtn3} = this.state;
    return (
      <div>
        <button key={'btn1'} style={{ backgroundColor: this.chooseColor(clicksBtn1) }} onClick={this.handleClick1}>
          {this.state.clicksBtn1}
        </button>
        <button key={'btn2'} style={{ backgroundColor: this.chooseColor(clicksBtn2) }} onClick={this.handleClick2}>
          {this.state.clicksBtn2}
        </button>
        <button key={'btn3'} style={{ backgroundColor: this.chooseColor(clicksBtn3) }} onClick={this.handleClick3}>
          {this.state.clicksBtn3}
        </button>
        <button onClick={this.clear}>Clear</button>
      </div>
    )
  }
}

export default App;