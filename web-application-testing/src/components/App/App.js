import React from 'react';
import './App.css';

import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      strikes: 0,
      balls: 0,
      action: '',
    };
  }

  hit = () => {
    this.setState({ strikes: 0, balls: 0, action: 'Successful hit!' });
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1, action: 'Foul ball!' });
    } else {
      this.setState({ action: 'Foul ball!' });
    }
  };

  strike = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1, action: 'Strike!' });
    } else {
      this.setState({ strikes: 0, balls: 0, action: 'Batter out!' });
    }
  };

  ball = () => {
    if (this.state.balls < 3) {
      this.setState({ balls: this.state.balls + 1, action: 'Ball!' });
    } else {
      this.setState({
        strikes: 0,
        balls: 0,
        action: '4 balls! Walk to first base!',
      });
    }
  };

  render() {
    return (
      <div>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
        <h3>{this.state.action}</h3>
      </div>
    );
  }
}

export default App;
