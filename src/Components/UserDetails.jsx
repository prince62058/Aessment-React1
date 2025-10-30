import React, { Component } from 'react';

class UserDetails extends Component {
  getWelcomeMessage() {
    return "Welcome to the session!";
  }

  render() {
    return (
      <div>
        <h1>Hello, User!</h1>
        <p>{this.getWelcomeMessage()}</p>
      </div>
    );
  }
}

export default UserDetails;
