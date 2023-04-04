class Personne {
    constructor(nom, age){
        this.nom = nom
        this.age = age
    }

    anniversaire(){
        this.age++
    }
}

//heritage
class Guerrier extends Personne{
    constructor(nom, age, pseudo){
        super(nom, age)
        this.pseudo = pseudo
        this.force = 5
        this.agilite = 2
        this.intel = 2
    }
}

let perso1 = new Guerrier("Oli", 32, "Wawa")
let perso2 = new Guerrier("Dom", 46, "Wawa2")
perso2.anniversaire()
console.log(perso1)
console.log(perso2)