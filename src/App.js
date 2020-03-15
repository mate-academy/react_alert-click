import React from 'react';
import './App.css';

function App() {
  const handleAlert = () => alert('Button was clicked');

  return (
    <div className="button-container">
      <button className="myAlert" onClick={handleAlert} type="button">
        Click me!
      </button>
    </div>
  );
}

export default App;
