<h1>
    <img align="center" width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-7P6VXwMhcSiPXAAeMwVW4mD_mj-slYTlPapw-NYfA&s"></a>
    <img align="center" width="40px" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"></a>
    <span>7DaysOfCode - Lógica de Programação com JavaScript</span>
</h1>

## Dia 1 - Lógica JS 1/7: Operações Booleanas
Reescreva o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

![image](https://github.com/leticiamatie/7DaysOfCode/assets/89943392/65229e9b-99cd-47f1-9e6d-9f1d4541b1d4)

## Dia 2 - Lógica JS 2/7: Variáveis
Desenvola um programa que deve pedir para o usuário responder 3 perguntas:
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas. No final, o sistema vai exibir a mensagem: "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

EXTRA:
Complemente o código para que, depois de exibir a mensagem anterior, o programa pergunte:
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

Dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
- 1 > Muito bom! Continue estudando e você terá muito sucesso.
- 2 > Ahh que pena... Mas pode pode aprender outras linguagens!

## Dia 3 - Lógica JS 3/7: Fluxo de Decisão
Desenvolva destinos possíveis de um jogo, em que o usuário consiguesse escolher:
- Se quer seguir para área de Front-End ou seguir para a área de Back-End.

Caso esteja na área de Front-End: 
- Se quer aprender React ou aprender Vue. 

Caso esteja na área de Back-End:
- Poderá aprender C# ou aprender Java.

Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

Pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

## Dia 4 - Lógica JS 4/7: Mais loops e Randomização
Criar um programinha de adivinhação de número. Comece com um  número randômico entre 0 a 10 utilizando: Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar 
- Caso você acerte, ele irá te parabenizar. 
- Caso erre, ele vai te dar mais 2 tentativas.
- No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

## Dia 5 - Lógica JS 5/7: Arrays e coleções
  Criar um programa em Javascript que: 
- Pergunta se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
- Pergunte qual comida você deseja inserir, e você digitará o nome dela.
- Deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas (como frutas, laticínios, congelados).
- Caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta.
- Irá exibir uma lista com todos os itens agrupados, da seguinte forma:
Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho

## Dia 6 - Lógica JS 6/7: Remoção de Arrays
Você criou ontem para montar a sua própria lista de compras. Já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.
Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

- Criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?
- Caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
- Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
- Por fim, ele voltará para o ciclo inicial de perguntas.
- Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
Por exemplo: “Não foi possível encontrar o item dentro da lista!”
Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.

## Dia 7 - Lógica JS 7/7: Funções em Javascript
Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.
- Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.
- Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.
- As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".
- Cada operação deverá ter uma função diferente no seu código, que receberá os valores inseridos como parâmetros e retornará com o resultado da operação.
- Não esqueça de usar estruturas de repetição para fazer a calculadora imprimir a escolha de operação até que a pessoa deseje parar o programa.
- Lembre-se também de que, além do if e else, também temos o switch, muito interessante de se utilizar em casos como esse, de múltipla escolha.
