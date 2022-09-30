/* 3# - Exercício
/* 
  Aqui no Brasil a temperatura é medida em Celsius. Porém, você foi contratado para uma empresa
   americana para trabalhar com programação JavaScript e agora deverá utilizar Fahrenheit no seu
   novo lar. Crie uma calculadora que faça essa conversão e escreva no terminal a seguinte 
   mensagem.

  RETORNO:
  "A temperatura de **VARIAVEL_EM_CELSIUS**°C é igual a Fahrenheit: **VARIAVEL_QUE_FAZ_A_CONTA**°F"
  
  OBS:
  1) Fórmula para o cálculo ||  °F = °C x 9 ÷ 5 + 32
  2) Para ver se seu algoritmo está correto, utilize o site https://www.metric-conversions.org/pt-br/temperatura/celsius-em-fahrenheit.htm
*/

function conversorDeTemperatura(tempEmCelsius) {
  let tempEmFahrenheit = tempEmCelsius * 9 / 5 + 32;
  console.log(`A temperatura ${tempEmCelsius}°C é, em Fahrenheit, ${tempEmFahrenheit}°F.`);
}

conversorDeTemperatura(30);

function conversorDeTemperaturaF(tempEmFahrenheit) {
  let tempEmCelsius = (tempEmFahrenheit - 32) * 5 / 9;
  console.log(`A temperatura ${tempEmFahrenheit}°F é, em Celsius, ${tempEmCelsius}°C.`);
}

conversorDeTemperaturaF(78);