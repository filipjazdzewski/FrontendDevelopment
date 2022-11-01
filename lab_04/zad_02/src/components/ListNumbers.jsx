import React from 'react';
import { useState } from 'react';
import ListItem from './ListItem';

function ListNumbers() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = (n) => {
    setNumbers(
      Array.from({ length: n }, (number) => Math.floor(Math.random() * 100))
    );
  };

  const removeNum = (index) => {
    setNumbers([
      ...numbers.slice(0, index),
      ...numbers.slice(index + 1, numbers.length),
    ]);
  };

  const convertToBinary = (index) => {
    setNumbers([
      ...numbers.slice(0, index),
      numbers[index].toString(2),
      ...numbers.slice(index + 1, numbers.length),
    ]);
  };

  const convertToDecimal = (index) => {
    setNumbers([
      ...numbers.slice(0, index),
      parseInt(numbers[index], 2),
      ...numbers.slice(index + 1, numbers.length),
    ]);
  };

  return (
    <div className='container'>
      <button onClick={() => generateNumbers(10)}>
        Generate Random Numbers
      </button>
      <ul>
        {numbers.map((num, index) => (
          <ListItem
            key={index}
            index={index}
            num={num}
            handleDelete={removeNum}
            handleBinary={convertToBinary}
            handleDecimal={convertToDecimal}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListNumbers;
