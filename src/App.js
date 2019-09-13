import React from 'react';
import './App.css';

function handleClick() {
  alert('Button was clicked!');
}

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <button
          onClick={() => handleClick()}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Click
        </button>
      </div>
    );
  }
}

export default App;
