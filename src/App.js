import React from 'react';
import './App.css';
import Slider from "./Slider"
import Total from "./Total"
import Rate from "./Rate"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {total: 0, rate: 0, sliderValue: 300}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      sliderValue: event.target.value,
      total: event.target.value * 1.2,
      rate: Math.round(event.target.value / 2.1)
    })
  }

  render() {
    return (
      <>
        <Slider min={300} max={9999} value={this.state.sliderValue} step={1} onSliderChange={this.handleChange} />
        <div>{this.state.sliderValue}</div>
        <Total value={this.state.total} />
        <Rate value={this.state.rate} />
      </>
    );
  }
}

export default App;
