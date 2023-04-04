class Auteur{
    constructor(nom, age){
        this.nom = nom
        this.age = age
    }

    toString(){
        let txt = ""
        txt += `Nom : ${this.nom} - Age : ${this.age}`
        return txt
    }
}


export default Auteur
