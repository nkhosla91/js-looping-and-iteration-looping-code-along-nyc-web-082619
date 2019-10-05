import { endianness } from 'os'

// Code your solutions in this file
let names = ["Ada", "Brendan", "Ali"]

function writeCards(name){
let names = ["Lisa", "Kaitlin", "Jan"]

    let messages = []
    let i = 0
    while (i < 3) {
     messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
     i ++
    }
    return messages
}

function countdown(number){
    let i = 0
    while (i < number + 1 ){
        let count = number - i
        console.log(count)
        i ++
    }
        
}