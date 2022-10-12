import {useState} from 'react';

const Calculator = () => {
    const [ initialValue, setInitialValue ] = useState(0); 

    // setInitialValue(7);
 
    return <div>Calculator content <div>initial value {initialValue}</div></div>;
};

export default Calculator;