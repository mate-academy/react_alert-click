import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Button was clicked!')} />
    </div>
  );
}

export default App;
