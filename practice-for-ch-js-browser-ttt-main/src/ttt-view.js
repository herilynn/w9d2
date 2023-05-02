class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }
  
  setupBoard() {
    // const board = [];
    // for (let i = 0; i < 3; i++) {
    //   board.push([[], [], []])
    // }
    // board.forEach((ele) => {
    //   let li = document.createElement("li");
      
    // })
    // this.game.board.forEach((ele) => {
    //   ele.forEach((pos) => {
    //     let li = document.createElement("li")  
    //   })
    // })
    const ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.attr = "pos"
        ul.appendChild(li);
      }
    }
    this.el.append(ul);
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;