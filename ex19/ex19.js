let notes1 = [5,10,15,20]
let notes2 = [2,4,6]

let calculMoyenne = tab =>{
    let sum = 0
    for(let val of tab){
        sum += val
    }
    return sum/tab.length
}

let ajout1 = tab => {
    let tabPlus = []
    for(let i of tab){
        tabPlus.push(i+1)
    }
    return tabPlus
}

const ajout1V2 = tab => tab.map(num =>num+1)

console.log(ajout1V2(notes1))

const additionnerTabs = (tab1, tab2)=>{
    let taille = tab1.length
    if(tab1.length<tab2.length) taille = tab2.length
    let tabFin = []
    for(let i = 0; i<taille; i++){
      let sum = (tab1[i]) ? tab1[i] : 0
      sum += (tab2[i]) ? tab2[i] : 0
      tabFin.push(sum)
        
    }
    return tabFin

}
console.log(additionnerTabs(notes1, notes2))