'use strict'
const sampleInput = ["apple", "banana", "abc","ab","abcd"]

const result = sampleInput.reduce( (acc, cur) => {
    let newWord = ''
    if(cur.length === 3){
        acc.push(" ")
    }else{
        newWord = cur.slice(0,cur.length-1) + cur.slice(cur.length-1, cur.length).toUpperCase()
        acc.push(newWord)
    }
    return acc
},  [])
console.log(result)