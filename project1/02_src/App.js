import './App.css';
import React from 'react';
import Hello from './component.js/Hello/Hello';
import Welcome from './component.js/Welcome/Welcome';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Hello />
        <Welcome />
      </div>
    )
  }
}

export default App;
