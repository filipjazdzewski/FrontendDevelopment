import React from 'react';
import { useContext } from 'react';
import ColorContext from '../context/ColorContext';

function Paragraph() {
  const { color } = useContext(ColorContext);

  return <p style={{ color: color }}>XD</p>;
}

export default Paragraph;
