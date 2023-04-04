let num

const tableMultiplication = (num, debut=1, fin=10)=>{
    if(debut > fin){
        // let diff= debut-fin
        // debut = debut-diff
        // fin = fin+diff
        let tmp = debut
        debut = fin
        fin = tmp
    }
    for(let i = debut; i<fin; i++){
       console.log( `${i} * ${num} = ${i*num}`)
    }
}

tableMultiplication(5,9, 7)

