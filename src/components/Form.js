import { Component } from 'react';
import Option from '../components/Option.js';
import '../components/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.setState(() => ({
      name: '',
      sabor: '',
      opinião: '',
    }));
  }

  handleChanges = () => {

  }

  render() {
    const sabores = ['Morango',
    'Chocolate',
    'Creme',
    'Flocos',
    'Pingo de mel'
    ];
    return (
      <div>
        <h1>Melhor sabor do mundo</h1>
        <form className='Form'>
          <label for='name'>Nome: </label>
          <input name='name' placeholder=' Nome Completo'/>
          <label for='sabor'>Sabor: </label>
          <select name='sabor'>
            <option disabled selected>Escolha seu sabor</option>
            {sabores.map((sabor) => <Option sabor={sabor}></Option>)}
          </select>
          <label>Opinião: </label>
          <textarea />
        </form>
      </div>
    )
  }
}

export default Form;
