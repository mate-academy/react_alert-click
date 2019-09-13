import React from 'react';
import './App.css';

const handleClick = showMessage => alert('Button was clicked!');

function App() {
  return (
    <div className="main">
      <button
        onClick={() => handleClick()}
        type="button"
        className="btn"
      >
        Click me
      </button>
    </div>
  );
}

export default App;
