const calcul = {
    moyenne : function(tab){
        let sum = 0;
        for(let num of tab){
            sum += num
        }
        let moy = sum/tab.length
        return moy
    },    
    somme : function(tab){
        let sum = 0;
        for(let num of tab){
            sum += num
        }
    
        return sum
    }
}

export default calcul

