const mots = ["clou", "flou", "bijou", "genou", "trou"]
const exceptions = ["bijou", "caillou", "genou", "hibou", "joujou", "pou"]

const motsV01 = mots.map(mot=>{   
    for(let exception of exceptions){
        if(mot === exception ){
           return  mot += "x"
        }
    }
    return mot +"s"
})
console.log(motsV01)


const motsV02 = mots.map(mot=>{
    if(exceptions.includes(mot)) return mot + "x"
    else return mot +"s"
})
console.log(motsV02)

const motsV03 = mots.map(mot=>{
    return exceptions.includes(mot) ? mot + "x" : mot + "s"
})
console.log(motsV03)

const motsV04 = mots.map(mot=>{
    return mot + (exceptions.includes(mot) ? "x" : "s")
})
console.log(motsV04)