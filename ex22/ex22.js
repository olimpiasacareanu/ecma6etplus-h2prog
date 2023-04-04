calculApres6sec(10,5)

async function calculApres6sec(x,y){
    console.log(`Essayez de faire la calcul ${x} * ${y}`)
    console.log(await attendre(4))
    console.log(await attendre(2))
    console.log(await calcul(x, y))
    
}

function attendre(timer){
    return new Promise(resolve => {
        setTimeout(()=>{
            return resolve(`Il vous reste ${timer} secondes`)
        }, 2000)
    })
}

function calcul(x, y){
    return new Promise(resolve => {
        setTimeout(()=>{
            return resolve(`Le resultat est : ${x*y}`)
        }, 2000)
    })
}