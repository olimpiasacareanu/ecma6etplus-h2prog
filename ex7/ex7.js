
let tab = []
let piles
let faces

const compter = tab=>{
    piles = 0
    faces = 0
    for(let val of tab ){
        if(val === 0) piles++
        else faces++
    }
}

const creerTab = ()=>{
    for(let i =0; i<10; i++){
        let num =Math.round(Math.random())
        tab.push(num)
        compter(tab)
    }
    return `Le nombre de piles est de  : ${piles}, \
    Le nombre de faces est de : ${faces} 
    Le nombre de faces représente : ${faces/(piles+faces)}%`
}

console.log(creerTab())
