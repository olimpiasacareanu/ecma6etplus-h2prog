const input = document.querySelector("input")
const button = document.querySelector(".btn")
const resultatHTML = document.querySelector("#resultat")

const factorielle = n => {
    let num = 1
    for(let i = 1 ; i<= n; i++){
        num*=i
    }
    return num
}

button.addEventListener('click', ()=>{
    let resultat = factorielle(input.value)
    resultatHTML.innerHTML = "La factorielle de " + input.value + " est de : " + resultat
})