/* 
Desenvola um programa que deve pedir para o usuário responder 3 perguntas:
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
*/

console.log("Seja bem-vindo(a)! ")
const name = prompt("Qual o seu nome? ");
const age = prompt("Quantos anos você tem? ")
const progLanguage = prompt("E qual linguagem de programação você está estudando? ")


const msg = ("Olá "+ name +", você tem "+ age +" anos e já está aprendendo "+ progLanguage + "!")
alert(msg)

/*
Exercício extra opcional.
Complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

Dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Mas pode pode aprender outras linguagens!
*/

const question = prompt("Você gosta de estudar " + progLanguage + " ? Responda com o número 1 para SIM ou 2 para NÃO. ")
alert(question)
    if (question == 1){
        console.log("Muito bom! Continue estudando e você terá muito sucesso.")
    }else if (question == 2){
        console.log("Ahh que pena... Mas você pode aprender outras linguagens!")
    }else{
        console.log("Resposta inválida.")
    }
