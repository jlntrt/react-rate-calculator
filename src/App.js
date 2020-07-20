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
      total: 3000,
      multiplicator: 0.66,
      vatrate: 0.16
    }
    this.handleChange = this.handleChange.bind(this)
    this.calculateDeposit = this.calculateDeposit.bind(this)
    this.calculateRate = this.calculateRate.bind(this)
  }

  componentWillMount() {
    this.setState({
      deposit: this.calculateDeposit(this.state.total),
      rate: this.calculateRate(this.state.total)
    })
  }

  calculateDeposit(total) {
    return (total * (this.state.vatrate + 1) * 0.1).toFixed(2)
  }

  calculateRate(total) {
    return (total * this.state.multiplicator / 52).toFixed(2)
  }

  handleChange(event) {
    const sliderValue = event.target.value

    this.setState({
      total: sliderValue,
      deposit: this.calculateDeposit(sliderValue),
      rate: this.calculateRate(sliderValue)
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
