import React from 'react';
import * as Minesweeper from '../minesweeper';

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

  }

  render() {

    return (
      <div>

      </div>
    )
  }

}

export default Game;
