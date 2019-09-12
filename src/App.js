import React from 'react';
import './App.css';

function alertFn() {
  alert('Button was clicked!');
}
function App() {
  return (
    <button onClick={alertFn} type="button" id="btn">Hello</button>
  );
}

export default App;
