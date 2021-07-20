const readLine= require("readline");
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

module.exports = Asker;