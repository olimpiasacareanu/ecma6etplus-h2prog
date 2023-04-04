const notes = [5, 10, 15, 20]

for(let [indice, note] of notes.entries()){
    if(note % 2 === 0){
        console.log(`Note numero ${indice} : ${note}`)
    }
}