'use strict';

import React from 'react';

import {Layer, Rect, Circle, Stage} from 'react-konva';
import { Link } from 'react-router'
import Grid from './GameGrid';
import data from '../stores/fakeStore';

let game = data();

require('styles//Board.scss');

class BoardComponent extends React.Component {
  render() {
    return (
      <div className="board-component">

            <Link to="/">Home</Link>
            <Link to="/player">Yellow</Link>
            <Link to="/board">Board</Link>
          <Stage width={700} height={700}>
            <Grid size={5} isPlayer={false}/>
            <Layer>
                {game.players.map(function(col, j) {
                    let x = 110 * col.pos[0];
                    let y = 110 * col.pos[1];
                    return <Rect key={j} x={x} y={y} width={20} height={20} fill={col.player} />;
                })}

                {game.players.map(function(col, j) {
                    let x = (110 * col.base[0]) + 50;
                    let y = (110 * col.base[1]) + 50;
                    return <Circle key={j} x={x} y={y} radius={30} stroke={col.player} strokeWidth={2} />;
                })}
            </Layer>
          </Stage>
      </div>
    );
  }
}

BoardComponent.displayName = 'BoardComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default BoardComponent;
