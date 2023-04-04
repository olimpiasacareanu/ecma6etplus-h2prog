// timer(4)

// async function timer(temps){
//     for(let i=temps; i>=0;i--){
//         console.log(await go(i))
//     }
//     console.log("Go!!!")
// }

// function go(i){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             return resolve(i)
//         }, 1000)
//     })
// }

async function isData(n){
    if(isNaN(n)){
        return new Error("ce n'est pas un numéro")
    }else if(n%2===0){
        console.log(await paire(n))
    }else{
        console.log(await impaire(n))
    }
    
}

function paire(n){
    return new Promise(resolve => {
        setTimeout(()=>{
            return resolve(`${n} est un numéro paire`)
        }, 1000)
    })
}
function impaire(n){
    return new Promise(resolve => {
        setTimeout(()=>{
            return resolve(`${n} est un numéro impaire`)
        }, 2000)
    })
}

isData(10)


//codinggame
// function job(data) {
//     return new Promise((resolve, reject) => {
//         if(isNaN(data)){
//             reject("error")
//         }else if(data%2===0){
//             setTimeout(()=>{
//                 reject(`even`)
//             }, 2000)
//         }else{
//             setTimeout(()=>{
//                 return resolve(`odd`)
//             }, 1000)
//         }
        
//     })
// }

// job(10)