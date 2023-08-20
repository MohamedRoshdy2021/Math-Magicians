import React from 'react';
import './index.css';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Api from './components/FetchAPI';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <header className="nav-app">
          <nav>
            <h1>Math Magicians</h1>
          </nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/components/FetchAPI">Quote</Link>
            <Link to="/components/Calculator">Calculator</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/Calculator" element={<Calculator />} />
          <Route path="/components/FetchAPI" element={<Api />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
