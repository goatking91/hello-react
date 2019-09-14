import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#000000',
    };
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    const { color } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          랜덤 색상
        </button>
        <LifeCycleSample color={color} />
      </div>
    );
  }
}

export default App;
