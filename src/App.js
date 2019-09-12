import React from 'react';
import './App.css';

function onClick() {
  alert('Button was clicked!');
}

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <button
          onClick={() => onClick()}
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
