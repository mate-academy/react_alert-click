import React from 'react';
import './App.css';

const handleClick = () => alert('Button was clicked');

const App = () => (
  <div>
    <button
      type="button"
      className="btn btn-danger place"
      onClick={handleClick}
    >
        Click me!
    </button>
  </div>
);

export default App;
