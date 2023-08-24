const check = document.getElementById('btnCheck')
const corpo = document.querySelector('body')
const print = document.getElementById('result')
const mensagem = document.getElementById("messager")
const tentativa = document.getElementById("try")
const pontuacao = document.getElementById("score")
const restart = document.getElementById("again")
const maxScore = document.getElementById("highscore")

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber)

restart.addEventListener('click', ()=>{
    mensagem.textContent = "Start guessing..."
    print.textContent = "?"
    corpo.style.backgroundColor = "#222"
    tentativa.value = ''
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    pontuacao.textContent = 20
})

check.addEventListener('click', ()=>{
    
    let numeroDigitado = parseInt(tentativa.value);
    let totalPontos = parseInt(pontuacao.value);

    if (numeroDigitado === secretNumber){
        corpo.style.backgroundColor = "green"
        mensagem.textContent = "Parabens, você acertou!"
        print.textContent = numeroDigitado;
        maxScore.innerHTML = pontuacao.textContent
    } else if (numeroDigitado > secretNumber){
        pontuacao.textContent -= 1
        print.textContent = "⬆"
        corpo.style.backgroundColor = "#222"
        mensagem.textContent ="O número digitado é maior que o secreto.📈"
        console.log(secretNumber)
    } else {
        print.textContent = "⬇";
        pontuacao.textContent -= 1
        corpo.style.backgroundColor = "#222"
        mensagem.textContent="O número digitado é menor do que o secreto.📉";
        console.log(secretNumber)
    } 
})