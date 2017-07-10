import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component{
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(9, 10);
    this.state = { board: board };
    this.restartGame = this.restartGame.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  restartGame() {
    const board = new Minesweeper.Board(9,10);
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
    let end;
    if (this.state.board.lost() || this.state.board.won()) {
      const text = this.state.board.won() ? "Congrats, you won!" : "Play again?";
      end =
        <div className="end-screen">
          <div className="end-content">
            <p>{text}</p>
            <button onClick={this.restartGame}>Play Again</button>
          </div>
        </div>;
    }

    return (
      <div>
        {end}
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}

export default Game;
