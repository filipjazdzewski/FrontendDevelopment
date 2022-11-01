import React from 'react';
import { useState } from 'react';

function ListItem({ num, index, handleDelete, handleBinary, handleDecimal }) {
  const [isDecimal, setIsDecimal] = useState(true);

  return (
    <li>
      {num}&nbsp;
      <button onClick={() => handleDelete(index)}>Delete</button>&nbsp;
      <button
        onClick={() => {
          if (isDecimal) {
            handleBinary(index);
            setIsDecimal(false);
          }
        }}
      >
        Binary
      </button>
      <button
        onClick={() => {
          if (!isDecimal) {
            handleDecimal(index);
            setIsDecimal(true);
          }
        }}
      >
        Decimal
      </button>
    </li>
  );
}

export default ListItem;
