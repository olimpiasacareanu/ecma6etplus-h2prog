const addition = (x, y) => x+y
const soustraction = (x, y) => x-y
const multiplication = (x, y) => x*y
const division= (x, y) => x/y

const afficherResultat = (x, y, operation) => {
    let txt = ""
    txt += `*************\n`
    txt += `Le résultat est ${operation(x,y)}\n`
    txt += `*************`

    return txt
}

console.log(afficherResultat(5,3, addition))
console.log(afficherResultat(12,20, soustraction))
console.log(afficherResultat(10,11, multiplication))
console.log(afficherResultat(5,3, division))

