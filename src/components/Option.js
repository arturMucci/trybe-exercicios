import { Component } from 'react'

class Option extends Component {
  render() {
    const { sabor } = this.props;
    return (
      <option>{sabor}</option>
    )
  }
}

export default Option;
