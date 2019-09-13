import React from 'react';
import './App.css';

function App() {
  const clickFunc = () => {
    alert('You were hacked)))');
  };
  return (
    <div className="block">
      <button className="positive ui button" onClick={clickFunc}>
        Click me !
      </button>
    </div>
  );
}

export default App;
