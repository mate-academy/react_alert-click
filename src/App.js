/* eslint-disable no-alert */
import React from 'react';
import './App.css';

function App() {
  const click = () => alert('Button was clicked!');
  return (
    <button type="submit" onClick={click}>Click me!</button>
  );
}

export default App;
