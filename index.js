const readLine= require("readline");
const { threadId } = require("worker_threads");

const Asker = require("./Asker.js")
const Cell = require("./Cell.js")
const Board = require("./Board.js")


let board = new Board();
//board.game().then(() => {}).catch(() => {})
(async () => {
    await board.game()
    })()
/*let cell = new Cell()
cell.askSync().then(() => {}).catch(() => {})*/