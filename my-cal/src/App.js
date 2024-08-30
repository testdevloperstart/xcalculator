import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
function App() {

  const [input, setInput] = useState('');

  const appendValue = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      // Check if input is empty
      if (input === '') {
        setInput('Error');
        return;
      }

      // Evaluate the expression using the BODMAS rule
      const result = eval(input);

      // Handle edge cases
      if (isNaN(result)) {
        setInput('NaN');
      } else if (result === Infinity) {
        setInput('Infinity');
      } else {
        setInput(result.toString());
      }
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="App">
     <input type="text" className="input" value={input} readOnly />
      <br />
      <div className="button-row">
        <button className="button" onClick={() => appendValue('7')}>7</button>
        <button className="button" onClick={() => appendValue('8')}>8</button>
        <button className="button" onClick={() => appendValue('9')}>9</button>
        <button className="button" onClick={() => appendValue('/')}>/</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => appendValue('4')}>4</button>
        <button className="button" onClick={() => appendValue('5')}>5</button>
        <button className="button" onClick={() => appendValue('6')}>6</button>
        <button className="button" onClick={() => appendValue('*')}>*</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => appendValue('1')}>1</button>
        <button className="button" onClick={() => appendValue('2')}>2</button>
        <button className="button" onClick={() => appendValue('3')}>3</button>
        <button className="button" onClick={() => appendValue('-')}>-</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => appendValue('0')}>0</button>
        <button className="button button-clear" onClick={clearInput}>C</button>
        <button className="button button-equal" onClick={calculate}>=</button>
        <button className="button" onClick={() => appendValue('+')}>+</button>
      </div>
    </div>
  );
}

export default App;
