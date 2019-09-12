import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const handleClick = msg => alert(msg);

  return (
    <div>
      <Button
        handleClick={() => handleClick('Button was clicked! 1')}
        className="button"
        title="Click Me 1"
      />
      <Button
        handleClick={() => handleClick('Button was clicked! 2')}
        className="button"
        title="Click Me 2"
      />
      <Button
        handleClick={() => handleClick('Button was clicked! 3')}
        className="button"
      />
    </div>
  );
}

export default App;
