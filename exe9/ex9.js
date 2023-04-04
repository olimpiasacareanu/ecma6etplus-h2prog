// const villes = [
//     ["paris", 48.8534, 2.334],
//     ["lyon", 73.8534, 8.334],
//     ["toulouse", 50.8534, 3.334]
// ]

// let [,v2,] = villes
// affichageCoordonnees(v2)
// function affichageCoordonnees(ville){
//     let [nom, lat, long] = ville
//     let affichage = `
//     ------ ${nom}-----
//     latitude : ${lat}
//     longitude : ${long}
//     `
//     console.log(affichage)
// }

const villes = {
    paris : {nom : "paris", lat : 48.5, long : 85.6},
    toulouse : {nom : "toulouse", lat : 48.5, long : 85.6},
    lyon : {nom : "lyon", lat : 38.5, long : 45.6},
}

let {paris, toulouse, lyon} = villes

function afficherCoordonnees(ville){
    let {nom, lat, long} = ville

    let affichage = `
    nom : ${nom}
    `
    console.log(affichage)
}

afficherCoordonnees(paris)