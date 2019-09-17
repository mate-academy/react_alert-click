import React from 'react';
import './App.css';

const App = () => (
  <div className="wrapper">
    <button
      type="button"
      className="button"
      onClick={() => alert('Button was clicked!')}
    >
      Click me!
    </button>
  </div>
);

export default App;
