function ConvertidorCelsius(numero) {
     let resultado = ((numero - 32) * 5 / 9).toFixed(1);
    return   numero + " Fahrenheit es " + resultado + " Celsius ❄️ ";
  }
  
  function ConvertidorFahrenheit(numero) {
    let resultado = ((numero * 9 / 5) + 32).toFixed(1);
    return  numero  + " celsiues es "+ resultado +" Fahrenheit ☀️";
  }
  
  function ConvertidorPrincipal(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
  
    const numeroParaConvertir = parseFloat(document.getElementById('numero').value);
    const fromUnit = document.getElementById('FromUnit').value;
    const toUnit = document.getElementById('ToUnit').value;
    const convertido = document.querySelector('.numeroConvertido');
  
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      convertido.innerText = ConvertidorFahrenheit(numeroParaConvertir);
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      convertido.innerText = ConvertidorCelsius(numeroParaConvertir) ;
    } else {
      convertido.innerText = "Por favor, seleccione unidades válidas.";
    }
  }
  
  // Asigna el evento `submit` del formulario
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-convertidor').addEventListener('submit', ConvertidorPrincipal);
  });