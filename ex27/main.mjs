import Livre from "./livre.mjs"
import Auteur from "./auteur.mjs"

let a1 = new Auteur("Milo", 31)
let livre = new Livre("Algorithmique", 200, a1)
console.log(livre.toString())
console.log(a1.affichage())