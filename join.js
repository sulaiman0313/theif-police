   



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

// function prom(complete){
//     return new Promise(function(resolved,reject){
//         if(complete){
//             resolved("successfull");
//         }else{
//             reject("failed");
//         }
//     });
// }
// console.log(prom(true));


//promises 2
// const flipKart = new Promise((orderAxcepted,orderCancel)=>{
//     let delay=Math.floor(Math.random() * 5)

//     if(delay>2){
//         orderCancel("ordercancel");
//     }
//     else{
//         orderAxcepted("accepted");
//     }
// })
// flipKart.then((data)=>{
//     console.log(data)

//     new Promise((res,rej)=>{
//         let delay = Math.floor(Math.random() * 3)
//         if(delay > 1){
//             rej("item is not available")
//         }else{
//             res("we are proccessing your order")

            
//         }
       
//     })
   
    
// }).then((data)=>{
//     console.log(data)
//     new Promise((res,rej)=>{
//         let delay = Math.floor(Math.random() * 3)
//         if(delay > 1){
//             rej("out of stock")
//         }else{
//             res("order product")

            
//         }

//     }) 
//     return p3;
    
// }).then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// })

// .catch((data)=>{
//     console.log(data)
// })

//

let delay=1000
function coolers(color,delay){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(delay>5000){
                rej();
            }
            else{
                document.body.style.backgroundColor = color;
                res();
            }
        },delay)
    })
}
coolers("green",delay)
.then(()=>{return coolers('lightpink',delay)})
.then(()=>{return coolers('orange',delay)})
.then(()=>{return coolers('#A1C349',delay)})
.then(()=>{return coolers('green',delay)})
.then(()=>{return coolers('pink',delay)})


