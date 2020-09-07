import React, { Component } from 'react';
import './Coins.css';

class Coin extends Component {
  render() {
    return <img className='Coin' src={this.props.src} alt={this.props.alt} />;
  }
}

export default Coin;
