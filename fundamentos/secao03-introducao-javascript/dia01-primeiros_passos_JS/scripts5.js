const angulo1 = 30;
const angulo2 = 60;
const angulo3 = 90;

let somaAngulos = angulo1 + angulo2 + angulo3;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if(somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro: Ângulo inválido");
}