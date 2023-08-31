   



// function dise(king,theif,minister,police){
// let sqr=Math.floor(Math.random() * 10000)
// console.log(sqr)

// setTimeout(()=>{
//     if(sqr<1000){
//         king()
//     }
//     else if(sqr==0){
//         theif()
//     }
//     else if(sqr>800){
//         minister()
//     }
//     else{
//         police()
//     }
// } ,1000)
// }
// dise(function(){
//     console.log('king')
// },function(){
//     console.log("theif")
// },function(){
//     console.log('minister')
// },function(){
//     console.log('police')
// })




//promise

let complete=false;
let prom=new Promise(function(resolved,reject){
    if(complete){
        resolved("successfull");
    }else{
        reject("failed");
    }
});
console.log(prom);
