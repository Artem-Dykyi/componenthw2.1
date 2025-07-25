// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Greeting } from './Greeting';
import { Message } from './Message';
import { Button } from './Button';

const App = () => {

  const handleClick = () => {
    console.log("Кнопка була натиснута!");
  };


  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Він професійний гравець в теніс"/>
      <Button onClick={handleClick} />

    </div>
  );
};

export default App;
