'use strict';
const words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const sampleInput = words.split(" ");

const result = sampleInput.reduce( (acc, cur) => {
  let newWord = '';
  if(cur.length === 3){
    acc += " ,";
  }else{
    newWord = cur.slice(0, cur.length - 1 ) + cur.slice(-1).toUpperCase();
    acc += newWord + ",";
  }
  return acc;
},  "");
console.log(result);