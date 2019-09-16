import React from 'react';
import './App.css';

function App() {
  function saySome() {
    alert('DONT REJECT PLZ(((');
  }

  return (
    <div>
      <button name="clicker" onClick={saySome}>
        Click me
      </button>
    </div>
  );
}

export default App;
