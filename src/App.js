import React from 'react';
import './App.css';
import Slider from "./Slider"
import TotalInput from "./TotalInput"
import PriceRow from "./PriceRow"

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
    this.roundValue = this.roundValue.bind(this)
  }

  componentDidMount() {
    this.setState({
      deposit: this.calculateDeposit(this.state.total),
      rate: this.calculateRate(this.state.total)
    })
  }

  calculateDeposit(total) {
    return this.roundValue(total * (this.state.vatrate + 1) * 0.1)
  }

  calculateRate(total) {
    return this.roundValue(total * this.state.multiplicator / 52)
  }

  roundValue(value) {
    return value.toFixed(2)
  }

  handleChange(event) {
    const { value } = event.target

    this.setState({
      total: value,
      deposit: this.calculateDeposit(value),
      rate: this.calculateRate(value)
    })
  }

  render() {
    return (
      <>
        <Slider min={300} max={9999} value={this.state.total} step={1} onSliderChange={this.handleChange} />
        <PriceRow label="Gesamtpreis (netto)" value={this.state.total} />
        <TotalInput value={this.state.total} onInputChange={this.handleChange} />
        <PriceRow label="Einmalige Kaution" value={this.state.deposit} />
        <PriceRow label="Wöchenlichte Rate (zzgl. MwSt)" value={this.state.rate} />
      </>
    );
  }
}

export default App;
