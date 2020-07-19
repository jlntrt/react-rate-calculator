import React from 'react';
import './App.css';
import Slider from "./Slider"
import Total from "./Total"
import Rate from "./Rate"
import Deposit from "./Deposit"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 3000
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
  }

  handleChange(event) {
    const sliderValue = event.target.value

    this.setState({
      total: sliderValue,
      deposit: Math.round(sliderValue * (0.16 + 1)).toFixed(2),
      rate: Math.round(sliderValue * 0.66 / 52).toFixed(2)
    })
  }

  render() {
    return (
      <>
        <Slider min={300} max={9999} value={this.state.total} step={1} onSliderChange={this.handleChange} />
        <Total value={this.state.total} />
        <Deposit value={this.state.deposit} />
        <Rate value={this.state.rate} />
      </>
    );
  }
}

export default App;
