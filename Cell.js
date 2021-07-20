const Asker = require("./Asker.js")
const readLine= require("readline");


class Cell extends Asker{

    value;
    row;
    col;
    async askSync() {
         this.value = await super.askSync("What element do you want to enter: 0 or x ");
            if(this.value !== '0' && this.value !== 'x')
            {
            console.log("Введите корректный символ: ")
            await this.askSync()
            }
 
            this.row = await super.askSync("Choose row: ");
            if(this.row < 0 || this.row > 2)
            {
            console.log("Choose correct row: ")
            await this.askSync()
            }
 
            this.col = await super.askSync("Choose column: ");
            if(this.col < 0 || this.col > 2)
            {
            console.log("Choose correct column: ")
            await this.askSync()
            }
       
 
        }
 
      async setValue(val)
        {
            this.value = val;
        }
 }

 module.exports = Cell;