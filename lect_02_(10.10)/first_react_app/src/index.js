import React from 'react';
import ReactDOM from 'react-dom/client';
//dodaje import App
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

// const firstname = "Filip";

// const element = <h1>Hello {firstname}!</h1>;

// root.render(element);

// const elem = React.createElement(
//   'h1',
//   null,
//   "Hello " + firstname + " Today"
// );

// root.render(elem);

// const tictac = () => {
//   const watch = <p> Time is {new Date().toLocaleTimeString()} </p>;
//   root.render(watch)
// };

// setInterval(tictac, 1000);


