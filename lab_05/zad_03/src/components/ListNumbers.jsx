import React from 'react';
import { useState, useEffect } from 'react';
import ListItem from './ListItem';

function ListNumbers() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    generateNumbers(10);
  }, []);

  const generateNumbers = (length) => {
    setNumbers(
      [...Array(length).keys()].map((_, index) => {
        return {
          number: Math.floor(Math.random() * 100),
          id: index,
        };
      })
    );
  };

  const handleRemoveNumber = (index) => {
    setNumbers(numbers.filter((item) => item.id !== index));
  };

  return (
    <div className='container'>
      <button onClick={() => generateNumbers(10)}>Generate</button>
      <ul>
        {numbers.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleRemoveNumber={handleRemoveNumber}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListNumbers;
