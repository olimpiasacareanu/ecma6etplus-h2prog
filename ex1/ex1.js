let p1 = 10
let p2
let p3
let somme

const calculMoyenne = () => {
    p1 = p1 + 5
    p2 = 6
    p3 = 12
    somme = p1 + p2 + p3 
    const resultat = somme/ 3

    return resultat
}

let moyenne = calculMoyenne()
console.log("P1 : " + p1 + " P2 : " + p2 + " P3 : " + p3)
console.log("la somme moyenne est de : " + somme)
console.log("La moyenne est de  : " + moyenne) 