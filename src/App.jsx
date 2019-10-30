import React, { Component } from 'react';

import InputField from './components/InputField.jsx';

import {
  calculateOne,
  calculateTwo,
  calculateThree,
  calculateFour,
  calculateFive,
  calculateSix,
  calculateSeven,
  calculateEight,
} from './utils/util.js';

import '../public/styles/main.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      result: '',
    };
  }

  handleUserInput = e => {
    const userInput = e.target.value;
    this.setState({ userInput });
  };

  handleAdd = () => {
    const { userInput } = this.state;

    try {
      const result = calculateEight(userInput);
      this.setState({ result, userInput: '' });
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { userInput, result } = this.state;
    return (
      <div className="app-container">
        <InputField
          result={result}
          userInput={userInput}
          handleUserInput={this.handleUserInput}
          handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}
