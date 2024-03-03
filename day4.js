/*
Criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que 
você vai adivinhar (7, por exemplo).
Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, 
caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número 
pré-definido.

*/
function numeroAleatorio() {
    return Math.floor(Math.random() * (10 - 0 + 1) + 0);
  }
  
  const adivinharNumero = numeroAleatorio();
  const numTentativas = 3;
  let tentativa = '';
  
  function validarNumero(numero) {
    return !isNaN(numero) && numero >= 0 && numero <= 10;
  }
  
  for (tentativa = 1; tentativa <= numTentativas; tentativa++) {
    const chute = parseInt(prompt("Tente adivinhar o número (entre 0 e 10):"));
  
    if (validarNumero(chute)) {
      if (chute === adivinharNumero) {
        alert("Parabéns! Você acertou o número!");
        break;
      } else {
        alert("Ops! Você errou. Tente novamente!");
        if (tentativa < numTentativas) {
          alert(`Você ainda tem ${numTentativas - tentativa} tentativas.`);
        }
      }
    } else {
      alert("Por favor, insira um número válido.");
    }
  }
  
  if (tentativa > numTentativas) {
    alert(`Você perdeu. O número era ${adivinharNumero}.`);
  }

/*
RESPOSTA:

const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}

*/