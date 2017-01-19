'use strict';

import React from 'react';
import {Stage} from 'react-konva';
import Grid from './GameGrid';
import { Link } from 'react-router'

require('styles//Player.scss');

class PlayerComponent extends React.Component {
  render() {
    return (
      <div className="player-component">

            <Link to="/">Home</Link>
            <Link to="/player">Yellow</Link>
            <Link to="/board">Board</Link>
          <Stage width={700} height={700}>
            <Grid size={5} isPlayer={true}/>
          </Stage>
      </div>
    );
  }
}

PlayerComponent.displayName = 'PlayerComponent';

// Uncomment properties you need
// PlayerComponent.propTypes = {};
// PlayerComponent.defaultProps = {};

export default PlayerComponent;
