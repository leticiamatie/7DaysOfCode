/*
Criar um programa em Javascript que: 
- Pergunta se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
- Pergunte qual comida você deseja inserir, e você digitará o nome dela.

- Deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas (como frutas, laticínios, congelados).

- Caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta 
- Irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
*/

const listaDeCompras = {}

function adicionarItem(){
    const resposta = prompt("Desenha adicionar algo na sua lista de compras? (sim/nao) ")
    if (resposta === "sim" ){
        const novoItem = prompt("O que você deseja adicionar? ")
        const categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, etc.): ")
        
        if (!listaDeCompras[categoria]){
            listaDeCompras[categoria] = []
        }
        listaDeCompras[categoria].push(novoItem);
        adicionarItem();
        
    }else if (resposta === "nao") {
        console.log ("Lista de compras: ")  
        for (const categoria in listaDeCompras){
            console.log(`${categoria}: ${listaDeCompras[categoria].join(', ')}`)
            }
    }else{
        alert("Opção inválida. ")
        adicionarItem()
    }
}
adicionarItem()