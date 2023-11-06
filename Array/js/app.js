let numero = document.getElementById('numero')
let todos = document.getElementById('todos')
let pares = document.getElementById('pares')
let impares = document.getElementById('impares')
let btn = document.getElementById('btn')
// Declarando um array
let numeros=[]

function cadastrar(){
// push - insere um valor no final do array
numeros.push(numero.value)
imprimir() // chamando a função imprimir
}

function imprimir(){
console.log(numeros)
todos.innerHTML = ''

 
// percorrendo um array
for(let i = 0; i < numeros.length; i++){
todos.innerHTML += `numero: ${numeros[i]} <br>`
if(numero.value %2==0){
    
}



}
}
btn.addEventListener('click', cadastrar)
