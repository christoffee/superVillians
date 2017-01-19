import React from 'react';
import {Rect, Layer} from 'react-konva';

class GameGrid extends React.Component {
    constructor(props) {
          super(props);
    }

    render() {
        let squares = [];
        const rowsCols = this.props.size;
        const numberSquares = rowsCols * rowsCols;
        for (var i = 0; i < numberSquares; i++) {
            let defaultSize = 10;
            let size = (this.props.isPlayer) ? defaultSize * 1 : defaultSize * 11;
            let squareSize = (this.props.isPlayer) ? defaultSize * 1 : defaultSize * 10;
            let x = size * (i % rowsCols);
            let y = size * (Math.floor(i / rowsCols));
            squares.push(<Rect key={i} x={x} y={y} width={squareSize} height={squareSize} fill={'darkolivegreen'} />);
        }

        return (
            <Layer>
                { squares }
            </Layer>
        );
    }
}

export default GameGrid;
