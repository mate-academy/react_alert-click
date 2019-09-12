import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handlerEvent = () => {
    alert("Button was clicked");
  }

  render() {
    return (
      <div class="ui inverted segment button-field">
        <h2 className="button-field__title">Alert click!</h2>
        <button
          type="button"
          className="ui inverted teal button"
          onClick={this.handlerEvent}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default App;
