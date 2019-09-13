import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('You were hacked)))');
  };
  return (
    <div className="block">
      <button className="positive ui button" onClick={handleClick}>
        Click me !
      </button>
    </div>
  );
}

export default App;
