import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick = () => {
    alert('Button was clicked!');
  }

  render() {
    return (
      <div className="wrapper">
        <button
          type="button"
          className="button"
          onClick={this.handleClick()}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default App;
