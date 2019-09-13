import React from 'react';
import './App.css';

function showAlert() {
  alert('Button was clicked!');
}
function App() {
  return (
    <button onClick={showAlert} type="button" id="btn">Hello</button>
  );
}

export default App;
