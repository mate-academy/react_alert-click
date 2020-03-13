import React from 'react';
import './App.css';

function App() {
  let handleAlert = (a) => {
    alert('Button was clicked');
  }

  return (
    <button className="myAlert" onClick={handleAlert} type="button">
      Click me!
    </button>
  );
}

export default App;
