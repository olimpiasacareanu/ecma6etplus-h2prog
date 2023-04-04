// import Auteur from "./auteur.mjs"

class Livre {
    constructor(titre, nbPage, auteur){
        this.titre = titre
        this.nbPage = nbPage
        this.auteur = auteur
    }

    toString(){
        let txt = ""
        txt += `Titre : ${this.titre} - Nombre de page : ${this.nbPage} - Auteur : ${this.auteur}`
        return txt
    }
}

export default Livre