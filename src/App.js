/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React from 'react';
import './App.css';

function App() {
  const showAlert = () => {
    alert('Button was clicked!');
  };

  return (
    <div className="button-position">
      <button className="alert-button" onClick={showAlert}>Click me</button>
    </div>
  );
}

export default App;
