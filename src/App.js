import React from 'react';
import './index.css';
import Calculator from './components/Calculator';
import DataFetchingComponent from './components/FetchAPI';

class App extends Calculator {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Calculator />
        <DataFetchingComponent />
      </>
    );
  }
}

export default App;
