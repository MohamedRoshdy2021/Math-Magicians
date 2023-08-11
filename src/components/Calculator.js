import React, { Component } from 'react';
import calculate from '../logic/calculate';
import '../index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onpClick = (pName) => {
    const answer = calculate(this.state, pName);
    this.setState(answer);
    this.updateOutputAndCalculator(answer);
  }

  updateOutputAndCalculator = (updatedCalculatorData) => {
    const { total, next } = updatedCalculatorData;
    const newOutput = total !== null ? total : next || '0';

    this.setState({
      output: newOutput,
    });
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="parentdiv">
        <div className="nav">
          <div className="nav-p">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <div className="math-opertion-right" role="presentation">
          <p className="math-o-right" onClick={() => { this.onpClick('/'); }} value="/">÷</p>
          <p className="math-o-right" onClick={() => { this.onpClick('*'); }} value="*">*</p>
          <p className="math-o-right" onClick={() => { this.onpClick('-'); }} value="-">-</p>
          <p className="math-o-right" onClick={() => { this.onpClick('+'); }} value="+">+</p>
          <p className="math-o-right" onClick={() => { this.onpClick('='); }} value="=">=</p>
        </div>
        <div className="math-opertion-top" role="presentation">
          <p className="math-o-top" onClick={() => { this.onpClick('AC'); }} value="/">AC</p>
          <p className="math-o-top" onClick={() => { this.onpClick('+/-'); }} value="pos-neg">+/-</p>
          <p className="math-o-top" onClick={() => { this.onpClick('%'); }} value="%">%</p>
        </div>
        <div className="math-numbers-con" role="presentation">
          <p className="math-number" onClick={() => { this.onpClick('1'); }} value="1">1</p>
          <p className="math-number" onClick={() => { this.onpClick('2'); }} value="2">2</p>
          <p className="math-number" onClick={() => { this.onpClick('3'); }} value="3">3</p>
          <p className="math-number" onClick={() => { this.onpClick('4'); }} value="4">4</p>
          <p className="math-number" onClick={() => { this.onpClick('5'); }} value="5">5</p>
          <p className="math-number" onClick={() => { this.onpClick('6'); }} value="6">6</p>
          <p className="math-number" onClick={() => { this.onpClick('7'); }} value="7">7</p>
          <p className="math-number" onClick={() => { this.onpClick('8'); }} value="8">8</p>
          <p className="math-number" onClick={() => { this.onpClick('9'); }} value="9">9</p>
          <p className="math-number" onClick={() => { this.onpClick('0'); }} value="0">0</p>
          <p className="math-number" onClick={() => { this.onpClick('.'); }} value=".">.</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
