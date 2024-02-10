const escolhas = ["pedra", "papel", "tesoura"];
const displayJogador = document.getElementById("displayJogador");
const displayCPU = document.getElementById("displayCPU");
const resultadoJogo = document.getElementById("resultadoJogo");
const pontuacaoJogador = document.getElementById("pontuacaoJogador");
const pontuacaoComputador = document.getElementById("pontuacaoComputador");

let scoreJogador = 0;
let scoreComputador = 0;

function jogar (escolhaJogador){
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];
    console.log(escolhaComputador);
    let resultado = "";

    if(escolhaJogador === escolhaComputador){
        resultado = "EMPATE!"
    }
    else{
        switch(escolhaJogador){
            case "pedra":
                resultado = (escolhaComputador === "tesoura") ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
                case "papel":
                resultado = (escolhaComputador === "pedra") ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
                case "tesoura":
                resultado = (escolhaComputador === "papel") ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
        }
    }

    displayJogador.textContent = `VOCÊ: ${escolhaJogador}`;
    displayCPU.textContent = `COMPUTADOR: ${escolhaComputador}`;
    resultadoJogo.textContent = resultado;

    resultadoJogo.classList.remove("textoVerde", "textoVermelho");

    switch(resultado){
        case "VOCÊ GANHOU!":
            resultadoJogo.classList.add("textoVerde");
            scoreJogador++;
            pontuacaoJogador.textContent = scoreJogador;
            break;
        case "VOCÊ PERDEU!":
            resultadoJogo.classList.add("textoVermelho");
            scoreComputador++;
            pontuacaoComputador.textContent = scoreComputador;
            break;
    }

}