import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  color: '#000000',
};

const propTypes = {
  color: PropTypes.string,
};

class LifeCycleSample extends Component {
  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      number: 0,
      color: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // eslint-disable-next-line no-unused-vars
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    const { color } = this.props;
    if (prevProps.color !== color) {
      return this.myRef.style.color;
    }
    return null;
  }

  handleClick = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1,
    });
  };

  render() {
    console.log('render');
    const { color } = this.props;
    const { color: color1, number } = this.state;
    const style = {
      color,
    };

    return (
      <div>
        <h1
          style={style}
          ref={instance => {
            this.myRef = instance;
          }}
        >
          {number}
        </h1>
        <p>color: {color1}</p>
        <button type="button" onClick={this.handleClick}>
          더하기
        </button>
      </div>
    );
  }
}

LifeCycleSample.defaultProps = defaultProps;
LifeCycleSample.propTypes = propTypes;

export default LifeCycleSample;
