import React from 'react';
import './App.css';

class App extends React.Component {
  alertOnClick = () => {
    alert('Button was clicked!');
  }

  render () {
    return (
      <div>
        <button
          type="button"
          onClick={this.alertOnClick}
          className="button"
        >
          Press Me!
        </button>
      </div>
    );
  }
}

export default App;
