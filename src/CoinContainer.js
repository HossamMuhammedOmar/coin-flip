import React, { Component } from 'react';
import { choice } from './helper';
import './CoinContainer.css';
import Coin from './Coin';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'head',
        imgSrc:
          'https://purepng.com/public/uploads/large/purepng.com-gold-coingoldatomic-number-79chemical-elementgroup-11-elementaurumgold-dustprecious-metalgold-coins-1701528977728s2dcq.png',
      },
      {
        side: 'tail',
        imgSrc:
          'https://lh3.googleusercontent.com/proxy/j8QjvJ646vO6zFgQ5XEWqrZt4OBpU1rcGHs7tLvM8kqJjUiTGi9H9DDNekQ7YejxZYBqynmwujTxtQm2TJDJLFS7PICTTvFCyP93ZeNDMazRTSGCj8aLjXl17SLn9msy',
      },
    ],
  };

  state = {
    currentCoin: null,
    flips: 0,
    head: 0,
    tail: 0,
  };

  flipTheCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currentCoin: newCoin,
        flips: st.flips + 1,
        tail: newCoin.side === 'tail' ? st.tail + 1 : st.tail,
        head: newCoin.side === 'head' ? st.head + 1 : st.head,
      };
    });
  }

  handleClick = (e) => {
    this.flipTheCoin();
  };

  render() {
    return (
      <div className='CoinContainer'>
        <h2>Lets Flip A Coin!</h2>
        {this.state.currentCoin !== null && (
          <Coin
            src={this.state.currentCoin.imgSrc}
            alt={this.state.currentCoin.side}
          />
        )}
        <p>
          Out Of {this.state.flips} flips, there have been {this.state.head}{' '}
          heads and {this.state.tail} tails
        </p>
        <button onClick={this.handleClick}>Coin Flip!</button>
      </div>
    );
  }
}

export default CoinContainer;
