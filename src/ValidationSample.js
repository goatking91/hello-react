import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      clicked: false,
      validated: false,
    };
  }

  handleChange = e => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    const { password } = this.state;
    this.setState({
      clicked: true,
      validated: password === '0000',
    });
    this.input.focus();
  };

  render() {
    const { clicked, password, validated } = this.state;
    const validatedClassName = validated ? 'success' : 'failure';
    return (
      <div>
        <input
          ref={instance => {
            this.input = instance;
          }}
          type="password"
          value={password}
          onChange={this.handleChange}
          className={clicked ? validatedClassName : ''}
        />
        <button type="button" onClick={this.handleButtonClick}>
          검증하기
        </button>
      </div>
    );
  }
}

export default ValidationSample;
