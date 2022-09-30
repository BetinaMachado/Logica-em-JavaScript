/* 4# - Exerci­cio
Crie uma calculadora de IMC que imprima a frase abaixo. Onde tem **___** substitua por variaveis.

  RETORNO ESPERADO:
  "
  **NOME** tem **IDADE** anos, pesa **KILOS** kg
  tem **ALTURA** de altura e seu IMC eh de **IMC**
  **NOME** nasceu em **ANO_NASCIMENTO**
  "
  OBS:
    1 - Crie variaveis(let/const) para nome, idade, peso, altura, imc e ano de nascimento
    2 - Para o resultado de altura utiliza em metros, exemplo: 1.63 | 1.85 | 1.76 e etc...
    3 - O calculo do IMC eh: peso / (alturaEmMetros * alturaEmMetros)
*/

function calculoImc(nome, idade, peso, altura) {
  let imc = peso / altura ** 2;
  let date = new Date();
  let ano = date.getFullYear();
  console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc.toFixed(0)}. ${nome} nasceu em ${ano - idade}.`);

}

calculoImc('Betina', 27, 54, 1.59)

// Lógica exemplificativa. Cálculo não funciona corretamente se a pessoa ainda não fez aniversário