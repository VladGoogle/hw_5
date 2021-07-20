const Asker = require("./Asker.js")
const Cell = require("./Cell.js")

class Board extends Cell{
    arr = [[new Cell(),new Cell(),new Cell()],[new Cell(),new Cell(),new Cell()],[new Cell(),new Cell(),new Cell()]]
    //arr = [[[],[],[]],[[],[],[]],[[],[],[]]]
    msg = "Game over!"
   
    checkWinner(row, val) 
        {
   if(row[0][0].value === val && row[0][1].value === val && row[0][2].value === val) {
     return val
   }
   else if(row[1][0].value === val && row[1][1].value === val && row[1][2].value === val) {
     return val
   }
   else if(row[2][0].value === val && row[2][1].value === val && row[2][2].value === val) {
     return val
   }
   else if(row[0][0].value === val && row[1][0].value === val && row[2][0].value === val) {
     return val
   }
   else if(row[0][1].value === val && row[1][1].value === val && row[2][1].value === val) {
     return val
   }
   else if(row[0][2].value === val && row[1][2].value === val && row[2][2].value === val) {
     return val
   }
   else if(row[0][0].value === val && row[1][1].value === val && row[2][2].value === val) {
     return val
   }
   else if(row[0][2].value === val && row[1][1].value === val && row[2][0].value === val) {
     return val
   }
            return null
           }
   
    async game() {
   
        while(true) {
               await super.askSync();
               // if(this.arr[this.row][this.cell] !== undefined)
               // {
               //     console.log("This cell is not empty,choose another cell")
               //     await super.askSync();
               // }
               this.arr[this.row][this.col].setValue(this.value)
               console.log(this.arr)
                       if(this.checkWinner(this.arr,this.value))
                       {
                           return console.log(this.msg);
                       }
       }
   }
   
               
            }

            module.exports = Board;