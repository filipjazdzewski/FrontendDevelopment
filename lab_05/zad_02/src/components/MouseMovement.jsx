import React from 'react';
import { useState, useEffect } from 'react';

function MouseMovement() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  const handleMouseMovement = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement);

    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    };
  });

  return (
    <div>
      x: {mouseCoords.x}
      <br />
      y: {mouseCoords.y}
    </div>
  );
}

export default MouseMovement;
