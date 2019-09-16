import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button was clicked!')
  }

  return (
    <div className="button-container">
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleClick}
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
