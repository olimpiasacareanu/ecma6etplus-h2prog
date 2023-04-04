let tab = [
    {nom : "Tya", age : 25},
    {nom : "Toto", age : 28},
    {nom : "Milo", age : 27},
    {nom : "Mina", age : 32}
]

let indice = tab.findIndex(p => p.nom === "Milo")
console.log(indice)
tab.splice(indice, 1)
console.log(tab)