/* 5# - Exerci­cio
/* 
  Hoje em dia no Brasil os combusti­veis estao bem caros, diante disso, precisamos desenvolver um 
  novo sistema para os carros em que o usuario digita o valor que ele tem em maos para o 
  abastecimento em um app e o computador de bordo diz a ele quantos litros ele vai colocar 
  de combusti­vel e quantos KM ele podera percorrer com esse combusti­vel, queremos que o usuario 
  tenha a informacao por tipo de combusti­vel, para que ele possa tomar a melhor decisao de qual 
  combusti­vel escolher.

  Escreva no console:
  "COLOCANDO R$**VALOR_** eh possi­vel:"
  "GASOLINA: Percorrer **___**KM e colocar **___** litros"
  "  ALCOOL: Percorrer **___**KM e colocar **___** litros"

  OBS:
   - Carros andam 10.2KM com gasolina
   - Carros andam 9.8KM com alcool
   - Os valores por litro atuais nos postos estao:  
        - GASOLINA = R$5.966
        - ALCOOL   = R$4.632
*/

function calculoCombustivel(valor){

let litrosGasolina = (valor / 5.966);
let litrosAlcool = (valor / 4.632);
let gasolinaKm = litrosGasolina * 10.2;
let alcoolKm = litrosAlcool * 9.8;

console.log(`Colocando R$ ${valor} é possível:
Gasolina: Percorrer ${gasolinaKm.toFixed(2)}km e colocar ${litrosGasolina.toFixed(2)}l
Álcool: Percorrer ${alcoolKm.toFixed(2)}km e colocar ${litrosAlcool.toFixed(2)}l`)
}

calculoCombustivel(120)