const notes = [5, 10, 15, 20]

const moyenneTab = tab => {
    let sum = 0
    for(let val in tab){
        sum += tab[val]
    }
    let moyenne = sum/tab.length
    return `La moyenne des notes est ${moyenne}` 
}

console.log(moyenneTab(notes))

// const notes = [5, 10, 15, 20]
// console.log(moyenneTab(notes))

// function moyenneTab(tab){
//     let sum = 0
//     for(let val of tab){
//         sum += val
//     }
//     let moyenne = sum/tab.length
//     return moyenne
// }