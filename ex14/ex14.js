let mot 

const estPalindrome = mot=>{
    let revers = mot.split("").reverse().join("")
    if(mot === revers) {
        return `${mot} est un palindrome`
    }else{
        return `${mot} n'est pas un palindrome`
    }
}

console.log(estPalindrome("rever"))