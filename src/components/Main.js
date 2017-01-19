require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { browserHistory } from 'react-router';
import Grid from './GameGrid';

class AppComponent extends React.Component {
    handleClick(player) {
        console.warn(player);
        browserHistory.push(`/player?player=${player}`);
    }
  render() {
    return (
      <div className="superVils">
          <div className='player player--yellow' onClick={this.handleClick.bind(null, 'yellow')}></div>
          <div className='player player--red'></div>
          <div className='player player--green'></div>
          <div className='player player--blue'></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
