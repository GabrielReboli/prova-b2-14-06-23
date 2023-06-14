//1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

// Função para validar se o número é primo
function numeroPrimo(numero) {
    var divisores = 0

    for (var count = 1; count <= numero; count++)

        if (numero % count == 0) {
            divisores++
        }

    if (divisores == 2) {
        return true
    } else {
        return false
    }

}

//Função para listar os números primos até 1000
function listarPrimos() {
    for (let i = 1; i <= 1000; i++) {
        if (numeroPrimo(i)) {
            console.log(i);
        }
    }
}

//2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

function validarSenha() {
    var senha = prompt('Digite a sua senha de teste')
    var maiusculas = /[A-Z]/.test(senha)
    var minusculas = /[a-z]/.test(senha)
    var numeros = /[0-9]/.test(senha)

    if ((senha.length >= 8 && maiusculas && minusculas && numeros) == true) {
        alert('Senha valida')
    } else {
        alert('Senha invalida')
    }
}

//3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

// Função para calcular o fatorial
function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
      return 1
    } else {
      var resultado = 1
      for (var i = 2; i <= numero; i++) {
        resultado *= i
      }
      return resultado
    }
  }

  // Função para listar os fatoriais de 1 a 10
  function listarFatoriais() {
    for (let i = 1; i <= 10; i++) {
      const fatorial = calcularFatorial(i)
      console.log(`Fatorial de ${i}: ${fatorial}`)
    }
  }




//4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

function quadradoPerfeito() {
    var numero = parseFloat(prompt('Insira aqui o numero que deseja verificar'))
    var quadrado = Math.sqrt(numero)
    var perfeito = Number.isInteger(quadrado)

    if (perfeito == true) {
        alert('Sim, ' + numero + ' é um quadrado perfeito porque a sua raiz quadrada é ' + quadrado +', um número inteiro.')
    } else {
        alert('Não é um quadrado perfeito')
    }
}

