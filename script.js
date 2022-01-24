//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let age = 30
if(age >= 18){
    console.log("Passou rapá! Acessa ai!")
}else{
    console.log("Jovem, volte 3 casas e toma vergonha!")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true
let humano = "true"
if(age >= 18 && humano == "true"){
    console.log("Chega mais, tu é um humano de maior")
}else{
    console.log("Humano de maior você não é")
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversário ="Novembro"
if(aniversário == "Janeiro" || aniversário == "Dezembro"){
    console.log("Chegou seu mês! Parabéns!")
}else{
    console.log("Seu aniversário ainda não chegou!")
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const nome ="Dandara Aryadne"
if (nome[0] == "R"){
    console.log("Seu nome inicia com a letra R")
}else{
    console.log("Seu nome não se inicia com R")
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const sobrenome = "Jesus Ferreira"
if(sobrenome.length>=6 || sobrenome.substring(0,1) == "E"){
    console.log("Você tem um sobrenome com 6 letras ou seu nome começa com E")
}else{
    console.log("Seu sobrenome tem menos de 6 letras e seu nome não começa com E")
}