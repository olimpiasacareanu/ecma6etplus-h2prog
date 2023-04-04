const pile = x => {
    return `Vous avez obtenu un Pile ${x}`  
}
const face = y => {
    return `Vous avez obtenu un Face ${y}`
}

const pileOuFace = (p, f)=>{
    const numRandom = Math.round(Math.random())
    if(numRandom === 1)  return p(numRandom) 
    else return f(numRandom)
}


console.log(pileOuFace(pile, face))

// function test(cb, cb2){
//     const rand = Math.round(Math.random()*10)
//     console.log(cb(rand, cb2))
//     return true
// }

// function mycallback(x, cb2){
//     return cb2(x+50)
// }

// function nega(x){
//     return x*-1
// }

// test(mycallback, nega)