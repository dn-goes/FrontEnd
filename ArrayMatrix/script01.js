// Metodos avançados de Arrays
let numeros = [10, 20, 30, 40, 50];

//map -  Percorreo Array e realiza operações
let numerosDobro = numeros.map(x => x*2);
console.log(numerosDobro);

//filter - percorrer e filtrar
let numerosFiltro = numeros.filter(x => x>25);
console.log(numerosFiltro);

// combinar filter com o map
let numFiltroDobro = numeros.filter(x => x<35).map(x => x/10);
console.log(numFiltroDobro);

//Reduce -> array -> simples
//soma dos valores de um array
let soma = numeros.reduce((x,y) => (x+y));
console.log(soma);

