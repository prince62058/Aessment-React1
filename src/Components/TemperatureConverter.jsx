import React, { Component } from 'react';

class TemperatureConverter extends Component {
  convertToFahrenheit(c) {
    return (c * 9/5) + 32;
  }

  convertToCelsius(f) {
    return (f - 32) * 5/9;
  }

  render() {
    return (
      <div>
        <h1>Temperature Converter</h1>
        <p>0°C is {this.convertToFahrenheit(0)}°F</p>
        <p>32°F is {this.convertToCelsius(32)}°C</p>
      </div>
    );
  }
}

export default TemperatureConverter;
