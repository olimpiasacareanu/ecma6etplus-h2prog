const calcul = {
    x : 5,
    y : 3,
    addition : function(){
        return this.x+this.y
    },
    multiplication : function(){
        return this.x*this.y
    },
    affichageCalcul : function(signe){
        let resultat = ""
        if(signe === "*" || signe === "X" || signe === "x"){
            resultat = `Le résultat du calcul ${this.x} * ${this.y} = ${this.multiplication()}`
        }else if(signe === "+"){
            resultat = `Le résultat du calcul ${this.x} * ${this.y} = ${this.addition()}`
        }else{
            alert("Merci d'inserer le signe d'addition ou de multiplication.")
        }
        return resultat
    }
}

console.log(calcul.affichageCalcul("+"))
console.log(calcul.affichageCalcul("*"))
console.log(calcul.affichageCalcul("x"))
console.log(calcul.affichageCalcul("X"))

