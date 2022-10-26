import './App.css';
import Form from './components/Form';

function App() {
  const sabores = [
    'Escolha seu sabor',
    'Morango',
    'Chocolate',
    'Creme',
    'Flocos',
    'Pingo de mel'
  ];

  return (
    <Form sabores={sabores}/>
  );
}

export default App;
