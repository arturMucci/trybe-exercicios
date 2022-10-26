import { Component } from 'react';
import Option from '../components/Option.js';
import '../components/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      checkbox: false,
      flavour: '',
      name: '',
      opinion: '',
    };
  }

  handleChanges = ({ target }) => {
    const {name} = target;
    const check = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: check,
    })
  }

  render() {
    const { sabores } = this.props;
    return (
      <div>
        <h1>Melhor sabor do mundo</h1>
        <form className="Form">
          <label htmlFor="name" >Nome: </label>
          <input name="name" placeholder=" Nome Completo" value={this.state.name} onChange={this.handleChanges} />
          <label htmlFor="sabor">Sabor: </label>
          <select name="flavour" defaultValue={sabores[0]} onChange={this.handleChanges}>
            {sabores.map((sabor) => <Option key={`sabor ${sabor}`} sabor={sabor}></Option>)}
          </select>
          <div>
            <input
              type="checkbox"
              name="checkbox"
              onChange={this.handleChanges}
            /> Concorda com os termos de uso?
          </div>
          <label>Opinião: </label>
          <textarea
            name="opinion"
            placeholder=" Porque gostou deste sabor?"
            value={this.state.opinion}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    )
  }
}

export default Form;
