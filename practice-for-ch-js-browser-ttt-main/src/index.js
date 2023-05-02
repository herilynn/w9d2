//Add your import statements for View and Game here
import View from './ttt-view.js'
import Game from '../ttt_node/game.js'

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let that = this
  const gameNew = new Game();
  const viewNew = new View(gameNew, document.getElementsByClassName("ttt")[0]);
});