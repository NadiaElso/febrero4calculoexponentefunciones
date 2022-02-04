let base: number = Number(prompt("Ingresa la base"));
let exponente: number = Number(prompt("Ingresa el exponente"));
let totalcalculo: number = 0;
while (exponente < 0) {
  exponente = Number(prompt("Ingresa un exponente mayor o igual a cero"));
}

function calculoDeExponente(): void {
  totalcalculo = 0;
  if (exponente === 0) {
    totalcalculo = 1;
    console.log(`El exponente de ${base} es ${totalcalculo}`);
  } else {
    for (let index = 0; index < exponente; index++) {
      totalcalculo = base * base;
    }
    console.log(`El exponente de ${base} es ${totalcalculo}`);
  }
}

calculoDeExponente();
