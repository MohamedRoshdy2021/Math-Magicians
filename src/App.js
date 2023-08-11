import React from 'react';
import './index.css';
import Calculator from './components/Calculator';
import Api from './components/FetchAPI';

class App extends Calculator {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Calculator />
        <Api />
      </>
    );
  }
}

export default App;
