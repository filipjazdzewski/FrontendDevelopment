import { createContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#000000');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider
      value={{
        color,
        changeColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
