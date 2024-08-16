const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Bonnie é o brawler mais broken do meta?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "afirmação"
            },
            {
                texto: "Obviamente!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O Pedro é bom de kit?",
        alternativas: [
            {
                texto: "INCAPAZ.",
                afirmacao: "afirmação"
            },
            {
                texto: "Muito, ruim no caso",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A melissa deve baixar o tal do brawl?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmação"
            },
            {
                texto: "Claro",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O diogo troca no x1 de sniper?",
        alternativas: [
            {
                texto: "Nem clica",
                afirmacao: "afirmação"
            },
            {
                texto: "Esse pega tudo.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O el primo, faz balão no brawl ball em 2024? ",
        alternativas: [
            {
                texto: "El prime né pai",
                afirmacao: "afirmação"
            },
            {
                texto: "Raulzinho mono poco das cadelona",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
