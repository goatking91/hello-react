import React, { Component } from 'react';

class EventPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    const { username, message } = this.state;
    alert(`${username}: ${message}`);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    const { message, username } = this.state;
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button type="button" onClick={this.handleClick}>
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
