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
   row;
   cell;
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

           this.cell = await super.askSync("Choose cell: ");
           if(this.cell < 0 || this.cell > 2)
           {
           console.log("Choose correct cell: ")
           await this.askSync()
           }
      

       }

     async setValue(val)
       {
           this.value = val;
       }
    /* cell = await super.askSync("What element do you want to enter: 0 or x"); */
}

class Check extends Cell
{
    checkWinner(rowIdx, colIdx, val) 
     {
        //console.log(this.arr[rowIdx][colIdx + 1])

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
             console.log("2")
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
             console.log("3")
            if(this.arr[rowIdx][colIdx +1].value === val && this.arr[rowIdx][colIdx + 2].value === val) {
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

class Board extends Check{
 arr = [[new Cell(),new Cell(),new Cell()],[new Cell(),new Cell(),new Cell()],[new Cell(),new Cell(),new Cell()]]
 //arr = [[[],[],[]],[[],[],[]],[[],[],[]]]
 msg = "Game over!"
 async game() {

     while(true)
     {
            await super.askSync();
            // if(this.arr[this.row][this.cell] !== undefined)
            // {
            //     console.log("This cell is not empty,choose another cell")
            //     await super.askSync();
            // }
            this.arr[this.row][this.cell].setValue(this.value)
            console.log(this.arr)
            for(let i=0;i<this.arr.length;i++){
                for(let j=0;j < this.arr.length;j++)
                {
                        
                    if(super.checkWinner(this.i,this.j,this.value))
                    {
                        
                        return this.msg;
                    }
                }
            }
            
         }
         
     }
     
}

 


let board = new Board();
//board.game().then(() => {}).catch(() => {})
(async () => {
    await board.game()
    })()
/*let cell = new Cell()
cell.askSync().then(() => {}).catch(() => {})*/