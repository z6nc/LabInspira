
let Number1 =  document.querySelector('.number1')
let Number2 =  document.querySelector('.number2')
let Buttons = document.querySelectorAll('.result-btn');
let Resultado = document.querySelector('#result')
let ResultadoText = document.querySelector('#result-text')
let ResultadoScore = document.querySelector('.score')
let ButtoMessage = document.querySelector('#btn-next')
let score = 0;

function RandomNumber() {
    return Math.floor(Math.random() * 10) // numero Random
}



function AddNumber() {
    let numberRandom1 = RandomNumber()
    let numberRandom2 = RandomNumber()
    Number1.innerHTML = numberRandom1
    Number2.innerHTML = numberRandom2
}
function MultiNumber(){
    let number1 = parseInt(Number1.innerHTML)
    let number2 = parseInt(Number2.innerHTML)
    return number1 * number2
}

function MostrarResultado(TextResult , Message) {
    ResultadoText.innerHTML = TextResult;
    ButtoMessage.innerHTML = Message;
    Resultado.style.display = 'flex';

}

function AsignarResultado(Resultado) {
    let randomIndex = Math.floor(Math.random() * Buttons.length); 

   let errores = [Resultado-1, Resultado+1, Resultado+2]; 


    // Asignar valores a los botones
    Buttons.forEach((button, index) => {
        if (index === randomIndex) {
            button.innerHTML = Resultado; 
        } else {
            button.innerHTML = errores.pop(); 
        }
    });
}

function Reset() {
    location.reload();
}

function CountScore(MessageResult) {
    if (MessageResult === 'Correcto') {
        score += 1;
        ResultadoScore.innerHTML = score;
    } else {
        score = 0;
        ResultadoScore.innerHTML = score;
    }
    
}

function CompareResult(event) {
    const resultado = MultiNumber();
    const respuesta = parseInt(event.target.innerHTML);
    const correcto = respuesta === resultado;

    CountScore(correcto ? 'Correcto' : 'Incorrecto');
    MostrarResultado(correcto ? 'Correcto' : 'Incorrecto', correcto ? 'Siguiente' : 'Reintentar');

    const nextAction = correcto ? GameStart : Reset;
    document.getElementById('btn-next').addEventListener('click', nextAction);
}




function GameStart(event) {
    event.preventDefault();
    AddNumber()
    let Resultado = MultiNumber()
    AsignarResultado(Resultado)
    Buttons.forEach(button => {
        button.removeEventListener('click', CompareResult); 
        button.addEventListener('click', CompareResult);
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('Play');
    const resetButton = document.getElementById('Reset');
    const nextButton = document.getElementById('btn-next');

    playButton.addEventListener('click', GameStart);
    resetButton.addEventListener('click', Reset);
    nextButton.addEventListener('click', function() {
        Resultado.style.display = 'none';
    });
});

