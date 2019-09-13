import React from 'react';
import './App.css';

function App() {
  const handleClick = () => alert ('Button was clicked!');

  return (
    <form>
      <button className="btn" onClick={handleClick}>Push me</button>
    </form>
  );
}

export default App;
