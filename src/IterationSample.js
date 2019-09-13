import React, { Component } from 'react';

class IterationSample extends Component {
  render() {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map((value, index) => {
      const indexPlus = index + 1;
      return <li key={indexPlus}>{value}</li>;
    });
    return <ul>{nameList}</ul>;
  }
}

export default IterationSample;
