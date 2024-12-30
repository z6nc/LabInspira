
let Number1 =  document.querySelector('.number1')
let Number2 =  document.querySelector('.number2')
let Buttons = document.querySelectorAll('.result-btn');
let Resultado = document.querySelector('#result')
let ResultadoText = document.querySelector('#result-text')
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

function MostrarResultado(TextResult) {
    ResultadoText.innerHTML = TextResult;
    Resultado.style.display = 'flex';
    document.getElementById('btn-next').addEventListener('click', function() {
        Resultado.style.display = 'none';
    });

}

function AsignarResultado(Resultado) {
    let randomIndex = Math.floor(Math.random() * Buttons.length); 

   let errores = [Resultado-1, Resultado+1, Resultado+2]; 


    // Asignar valores a los botones
    Buttons.forEach((button, index) => {
        if (index === randomIndex) {
            button.innerHTML = Resultado; // El botón correcto muestra el resultado
        } else {
            button.innerHTML = errores.pop(); // Los otros botones muestran errores únicos
        }
    });
}


function CompareResult(event) {
    let Resultado = MultiNumber()
    let button = event.target
    let respuesta = parseInt(button.innerHTML)
    if (respuesta === Resultado) {
        MostrarResultado('Correcto')

    } else {
        MostrarResultado('Incorrecto')
    }
}

function GameStart(event) {
    event.preventDefault();
    AddNumber()
    let Resultado = MultiNumber()
    AsignarResultado(Resultado)
    Buttons.forEach(button => {
        button.removeEventListener('click', CompareResult); // Evitar eventos duplicados
        button.addEventListener('click', CompareResult);
    });
}




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Play').addEventListener('click', GameStart);
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-next').addEventListener('click', GameStart);
  });