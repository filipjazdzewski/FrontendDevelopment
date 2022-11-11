import React from 'react';
import { useState } from 'react';

function ListItem({ item, handleRemoveNumber }) {
  const [isDecimal, setIsDecimal] = useState(true);
  const index = item.id;
  const number = item.number;

  const handleNumberChange = () => {
    isDecimal ? setIsDecimal(false) : setIsDecimal(true);
  };

  return (
    <li>
      <div className='number'>{isDecimal ? number : number.toString(2)}</div>
      <button onClick={() => handleRemoveNumber(index)}>Delete</button>
      <button onClick={handleNumberChange}>{isDecimal ? 'Bin' : 'Dec'}</button>
    </li>
  );
}

export default ListItem;
