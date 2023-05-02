class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();

    //this.handleClick = this.handleClick.bind(this)
    //document.removeEventListener('click', this.handleClick)
  }
  
  setupBoard() {
    const ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.dataset.pos = JSON.stringify([i,j]);
        ul.appendChild(li);
      }
    }
    this.el.append(ul);
  }
  
  handleClick(e) {
    // e.preventDefault();
    const cell = e.target;
    const parseCell = JSON.parse(cell.dataset.pos);
    const player = this.game.currentPlayer
    this.game.playMove(parseCell);
    cell.innerText = player;

  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;