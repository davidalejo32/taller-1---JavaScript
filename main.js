let resultado;
let plantilla1;
let plantilla2;

let d = document;

let num1 = 50;
let num2 = 30;

if (num1 < num2) {
  resultado = num1;
} else {
  resultado = num2;
}

plantilla1 = `
Taller1: Definir dos variables y crear un programa que imprima el resultado mostrando el numero menor:

  num1 = 50;
  num2 = 30;

  ${
    typeof resultado === "number"
      ? `${resultado} es el numero menor`
      : resultado
  }  

`;

d.querySelector("#plantilla1").innerText = plantilla1;

// taller 2
num1 = 25;
num2 = 40;
let num3 = 20;

if (num1 > num2 && num1 > num3) {
  resultado = num1;
} else if (num2 > num1 && num2 > num3) {
  resultado = num2;
} else if (num3 > num1 && num3 > num2) {
  resultado = num3;
} else {
  resultado = `hay numeros que son iguales`;
}

plantilla2 = `

Taller2: Definir tres variables y crear un programa que imprima el resultado mostrando el numero mayor:

  num1 = 25;
  num2 = 40;
  num3 = 20;

  ${
    typeof resultado === "number"
      ? `${resultado} es el numero mayor`
      : resultado
  }  

`;

d.querySelector("#plantilla2").innerText = plantilla2;
