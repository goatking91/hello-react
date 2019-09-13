import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  name: '기본 이름',
};

const propTypes = {
  name: PropTypes.string, // name props 타입을 문자열로 설정합니다.
  age: PropTypes.number.isRequired, // 필수적으로 존재해야 하며, 숫자입니다.
};

class MyComponent extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>안녕하세요, 제 이름은 {name} 입니다.</p>
        <p>저는 {age}살 입니다.</p>
      </div>
    );
  }
}

MyComponent.defaultProps = defaultProps;
MyComponent.propTypes = propTypes;

export default MyComponent;
