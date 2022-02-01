const prompt = require('prompt-sync')();

function codificador(){
  let frase = prompt("Frase para ser codificada: ")
  let index = prompt("Fator de codificação: ")
  index = parseInt(index)

  let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  let frase_cripto = ""
  
  let new_index = 0

  for(i=0; i<frase.length; i++){
    if(frase[i] == " "){
      frase_cripto += " "
    }

    for(j=0; j<alfabeto.length; j++){
      if(frase[i] == alfabeto[j]){
        new_index = j + index

        if(new_index >= 0){
          if(new_index >= alfabeto.length){
            new_index = new_index%alfabeto.length
            frase_cripto += alfabeto[new_index] 
          }
          else{
            frase_cripto += alfabeto[new_index]
          }
        }
        else{
          if(new_index >= alfabeto.length * -1){
            new_index = new_index + alfabeto.length
            frase_cripto += alfabeto[new_index]
          }
          else{
            new_index = (new_index%alfabeto.length) + alfabeto.length
            if(new_index == 26){
              new_index = 0
            }
            frase_cripto += alfabeto[new_index]
          }

        }        
      }
    }
  }
	console.log(`Frase codificada: ${frase_cripto}`);
	console.log(" ");
const q = prompt("deseja fechar o programa? [s] ou [n] ")
if(q === "n") { 
	console.clear();
	codificador() }
}

codificador()
