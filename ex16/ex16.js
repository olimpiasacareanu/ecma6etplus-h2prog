const classes = {
    guerrier : {
        classe : "war", 
        force : 5, 
        agilite: 3,
        intelligence:2
    },
    archer : {
        classe : "archer", 
        force : 5, 
        agilite: 3,
        intelligence:2
    },
    mage : {
        classe : "mage", 
        force : 5, 
        agilite: 3,
        intelligence:2
    }
}

let milo = {
    nom : "milo",
    age : 30,
    ...classes.guerrier
}

let tyo = {
    nom : "tya",
    age : 22,
    ...classes.archer
}

const afficherPerso = (...persos)=>{
    let txt = ""
    for(let p of persos){
        txt +=`*********\n`
        +`Nom : ${p.nom}\n`
        +`Age : ${p.age}\n`
        +`Classe : ${p.classe}\n`
        +`Liste des caractèristiques\n`
        +`Force : ${p.force}\n`
        +`Agilite : ${p.agilite}\n`
        +`Intelligence : ${p.intelligence} \n`
    }
    console.log(txt)
}

afficherPerso(milo, tyo)