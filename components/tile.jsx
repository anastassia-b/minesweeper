import React from 'react';

class Tile extends React.Component{
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click(e) {
    const flagged = e.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagged);
  }

  render() {
    const tile = this.props.tile;
    let text, count, classname;
    if (tile.explored) {
      if (tile.bombed) {
        classname = 'bombed';
        text = '\ud83d\udca3';
      } else {
        classname = 'explored';
        count = tile.adjacentBombCount();
        text = (count > 0 ? `${count}` : "");
      }
    } else if (tile.flagged) {
      classname = 'flagged';
      text = '\u2691';
    } else {
      classname = 'unexplored';
    }
    classname = `tile ${classname}`;

    return (
      <div className={classname} onClick={this.click}>{text}</div>
    );
  }
}

export default Tile;
