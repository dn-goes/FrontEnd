// Introdução ao Estudo de Dom

// Selecionar e Modificar Elementos

//getElmentyById -> variavel simples
let titulo = document.getElementById("titulo");
console.log(titulo);   // ver o elemnto
titulo.innerText = "Outro Titulo";   //modificar o texto

//getElementsByClassName -> Vetor(array)
let descricao = document.getElementsByClassName ("descricao");
console.log(descricao[0]);
descricao[1].innerText = "Outro texto";
descricao[0].style.color = "blue";



//getElemtsByTagName -> Vetor (array)
let p = document.getElementsByTagName("p");
console.log(p[1]);
p[1].style.fontWeight = "bold"


//querySelctor -> variavel do tipo simples
let paragrafo = document.querySelector("p");
console.log(paragrafo);
paragrafo.style.fontSize = "35px";

//querySelectorAll -> Vetor(array)
let descricaoAll = document.querySelectorAll(".descricao")
descricaoAll.forEach(element => element.style.color="blue");

// Lançamento de eventos (EventListener)

//priemira forma (chamando direto no botão)
function mudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}

//2 forma adicionar um ouvinte
document.querySelector(".btn").addEventListener(
    "click",outraCorFundo
);

function outraCorFundo() {
    document.body.style.backgroundColor="orange";
}