//import {useRef} from 'react';
//import {useState} from 'react';
//import ClassCounter from './components/ClassCounter';
import Calculator from './components/calculator';
import Counter from './components/Counter';
import { Sum } from './operation/Sum';
import './App.css';
const App = () => {
  return (
    <div>
      <Calculator/>
      <Counter data={{title: 'Hello World!!!'}}/>
    </div>
  );
};

export default App;