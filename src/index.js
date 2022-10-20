import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Image from './App.js';
import gato from './image/cat-2083492_1280.jpg';

const memoGato = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Image source={gato} alternativeText={'gatãozão'} />
    <Image source={memoGato} alternativeText={'gatinhozinho'} />
  </div>
);
