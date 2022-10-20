import { Component } from 'react';

class Myname extends Component {
  render() {
    return (
      <div className='abilities'>
        <h1>Artur de Meiras Mucci.</h1>
        <p>Oi, meu nome é Artur!</p>
        <h2>Minhas habilidades</h2>
        <ul>
          <li className='li'>Terminal unix</li>
          <li className='li'>Git & GitHub</li>
          <li className='li'>HTML5</li>
          <li className='li'>CSS3</li>
          <li className='li'>ES6</li>
          <li className='li'>Manipulação do DOM</li>
          <li className='li'>React.js</li>
        </ul>
      </div>
    );
  }
}

export default Myname;
