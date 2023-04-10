import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncreament = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prev => ({count: prev.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <h1 className="head1">Count {count} </h1>
        <h1 className="head2">Count is {displayText}</h1>
        <button className="button" onClick={this.onIncreament} type="button">
          Increament
        </button>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
