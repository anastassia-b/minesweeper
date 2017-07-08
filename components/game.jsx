import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component{
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(10, 10);
    this.state = { board: board };
    this.restartGame = this.restartGame.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  restartGame() {
    const board = new Minesweeper.Board(10,10);
    this.setState({ board: board });
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({board: this.state.board });
  }

  render() {

    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }

}

export default Game;
