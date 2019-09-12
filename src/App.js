/* eslint-disable no-alert */
import React from 'react';
import './App.css';

const showMessage = () => alert('Button was clicked!');

function App() {
  return (
    <button type="submit" onClick={showMessage}>Click me!</button>
  );
}

export default App;
