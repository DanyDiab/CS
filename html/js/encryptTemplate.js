// global vars
let Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let EncryptKey = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"]; 
 
// encryption function
// parameter = similar to letter = ""
function encryptFunc(letter){
  finalWord = ""
  word = prompt("word: ");
  for (i = 0, n = word.length; i < n; i++){
    let index = word[i];
    console.log("letter = " + index);
    console.log(encyptscore = Letters.indexOf(index));
    encrypted = (EncryptKey[encyptscore]);
    finalWord += encrypted;
    console.log("Encrypted letter: " + encrypted);
    console.log("Final word = "+ finalWord);
  }
  // used to change the text on html
  output();
}
// used the same function as before just changed the order
function decryptFunc(letter){
  finalWord2 = ""
  word2 = prompt("word: ");
  for (i = 0, n = word2.length; i < n; i++){
    let index2 = word2[i];
    console.log("letter = " + index2);
    console.log(decryptscore = EncryptKey.indexOf(index2));
    decrypted = (Letters[decryptscore]);
    finalWord2 += decrypted;
    console.log("Regular letter: " + decrypted);
    console.log("Final word = "+ finalWord2);
  }
  output();
}
 
// HTMl stuff
function getInputValue(){
    return document.getElementById("userInput").value;
  }
 
  function output(content){
    document.getElementById("userMsg").innerHTML = finalWord;
    document.getElementById("display2").innerHTML = finalWord2;
  }
// Hey Mr.Cozort
// svbnixlalig ;)
 
