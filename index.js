const readLine= require("readline");
const { threadId } = require("worker_threads");
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

class Asker{
   async askSync(q){
        return new Promise((resolve,reject)=>{
            rl.question(q, (data)=>{
            resolve(data)
        });
    });
    };
}

class Cell extends Asker{  
   value;
   async askSync(row, col) {
        this.value = await super.askSync("What element do you want to enter: 0 or x ");
        console.log(this.value)
           if(this.value !== '0' && this.value !== 'x')
           {
           console.log("Введите корректный символ: ")
           //throw new Error("Вы ввели некоректный символ")
           await this.askSync()
           }
       }
    /* cell = await super.askSync("What element do you want to enter: 0 or x"); */
}

class Board extends Cell{
 arr = [[new Cell(),new Cell(),new Cell()],[new Cell(),new Cell(),new Cell()],[new Cell(),new Cell(),new Cell()]]
 //arr = [[[],[],[]],[[],[],[]],[[],[],[]]]
 async game() {
     for(const row of this.arr) {
         for(const cell of row) {
             await super.askSync()
                console.log(this.arr)
         }
     }

     
 }
 checkWinner(rowIdx, colIdx, val) {

     if(colIdx === 0) {
         if(this.arr[rowIdx][colIdx + 1].value === val && this.arr[rowIdx][colIdx + 2].value === val) {
return val
         }
         if(this.arr[rowIdx + 1][colIdx].value === val && this.arr[rowIdx + 2][colIdx].value === val) {
            return val
            } 
         else if(this.arr[0][0].value === val && this.arr[1][1].value === val && this.arr[2][2]=== val)
         {
             return val
         }
         else if(this.arr[0][2].value === val && this.arr[1][1].value === val&& this.arr[2][0]=== val)
         {
             return val
         }
     }

     if(colIdx === 1) {
        if(this.arr[rowIdx][colIdx + 1].value === val && this.arr[rowIdx][colIdx + 2].value === val) {
            return val
                     } 
                     else if(this.arr[rowIdx-1][colIdx].value === val && this.arr[rowIdx+1][colIdx].value === val) {
                        return val
                    }

                     else if(this.arr[1][1].value === val && this.arr[0][0].value === val&& this.arr[2][2]=== val)
                     {
                         return val
                     }
                     else if(this.arr[1][1].value === val && this.arr[0][2].value === val&& this.arr[2][0]=== val)
                     {
                         return val
                     }
     }

     if(colIdx == 2) {
        if(this.arr[rowIdx][colIdx + 1].value === val && this.arr[rowIdx][colIdx + 2].value === val) {
            return
                     }
                    else if(this.arr[rowIdx-1][colIdx].value === val && this.arr[rowIdx-2][colIdx].value === val) {
                        return val;
                    }
                     else if(this.arr[2][0].value === val && this.arr[1][1].value === val&& this.arr[0][2]=== val)
                     {
                         return  val;
                     }
                     else if(this.arr[2][2].value === val && this.arr[1][1].value === val&& this.arr[0][0]=== val)
                     {
                         return val;
                     }
     }
     return null
 }
}

let board = new Board();
//board.game().then(() => {}).catch(() => {})
(async () => {
    await board.game()
    })()
/*let cell = new Cell()
cell.askSync().then(() => {}).catch(() => {})*/