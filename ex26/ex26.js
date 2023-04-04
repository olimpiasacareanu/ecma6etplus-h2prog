class Voiture{
    constructor(marque, modele, nbPortes){
        this.marque = marque
        this.modele = modele
        this.nbPortes = nbPortes
    }
}

class Voiture5Portes extends Voiture{
    constructor(marque, modele){
        super(marque, modele, 5)
        this.type = "familiale"

    }
}
class Voiture3Portes extends Voiture{
    constructor(marque, modele){
        super(marque, modele, 3)
        this.type = "célibataire"

    }
}
class Voiture5PortesYotota extends Voiture5Portes{
    constructor(modele){
        super("Yotota", modele)
    }
}
class Voiture5PortesTroen extends Voiture5Portes{
    constructor(modele){
        super("Troen", modele)
    }
}
class Voiture5portesYototaRyas extends Voiture5PortesYotota{
    constructor(){
        super("Ryas")
    }
}

let yotota = new Voiture5portesYototaRyas()
console.log(yotota)

let troen = new Voiture5PortesTroen("5C")
console.log(troen)

let troen2 = new Voiture3Portes("Troen", "4C")
troen2.type = "célibataire"
console.log(troen2)