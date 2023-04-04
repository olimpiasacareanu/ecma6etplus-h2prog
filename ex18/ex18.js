const createSelect = (table, ...conditions)=>{
    let cond = ""
    for(let [key, val] of conditions.entries()){
        console.log(conditions)
        cond += `${val.champ} = "${val.valeur}"`
        if(key != conditions.length-1) cond += ` AND `
    }
    
    return `select * from ${table} where ${cond}`
}

console.log(createSelect("livre", {champ:"type", valeur:"policier"}, {champ:"auteur", valeur: "Victor"}))