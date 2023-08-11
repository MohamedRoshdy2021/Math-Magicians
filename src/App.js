import React from 'react';
import './index.css';
import Calculator from './components/Calculator';

class App extends Calculator {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
