import React, { Component } from 'react';

class Greeting extends Component {
  sayHello() {
    return "Hello, welcome Prince";
  }

  sayGoodbye() {
    return "Goodbye, see you soon!";
  }

  render() {
    return (
      <div>
        <h1>{this.sayHello()}</h1>
        <h1>{this.sayGoodbye()}</h1>
      </div>
    );
  }
}

export default Greeting;
