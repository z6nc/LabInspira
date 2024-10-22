const nivelesDeServicio = {
  "excelente": 0.2,
  "Buena": 0.15,
  "regular": 0.1,
  "Terrible": 0.05
};

const imagenCalamardo = {
  "excelente": "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/X33K2VDBLNGZJOQKL6YHL6SQPQ.jpg",
  "Buena": "https://storage.googleapis.com/www-saludiario-com/wp-content/uploads/2022/07/8ab71d96-calamardo-696x392.jpeg",
  "regular": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_gjyzz6GNtu4PII_PdkfgcMjNHy-1176dg&s",
  "Terrible": "https://i.pinimg.com/originals/aa/8a/a7/aa8aa7d39d044859e4a701ba0d255b92.jpg"
};



function calcularPropina(Monto, Servicio) {
  let montofinal = Math.round(Monto * (nivelesDeServicio[Servicio] || 0)) ;
  return  montofinal
}


function mostrarResultados(Servicio, Monto, Propina) {
  document.getElementById("Resultaservicio").innerText = `${Servicio}`;
  document.getElementById("Resultadototal").innerText = `$USD  ${Monto}`;
  document.getElementById("Resultadopropina").innerText =`$USD ${Propina}`;
  document.getElementById("imagenCalamardo").src = `${imagenCalamardo[Servicio]}`;
}





function propina (event){
  event.preventDefault();
  let Monto = parseFloat(document.getElementById("monto").value);
  let Servicio = document.getElementById("servicio").value;
  let Propina = calcularPropina(Monto, Servicio);
  if (  Servicio === "") {
    alert("Te falta llenar un campo");
    return;
  }
  if (Monto <= 0 || Monto >10000) {
    alert("Ingresa otro monto");
    return;
    
  }

  mostrarResultados(Servicio, Monto, Propina);

}



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calcular').addEventListener('submit', propina);
});




//Juego para adivinar la propina que dejara el usuario

// function PropinaMesero (propinaUser){
//     let PrecioTotal = Math.round(Math.random() * (1000 - 40 + 1) + 40);
//     let  MaxPropina = MaximaPropina(PrecioTotal);
     
//      let respuesta ="";
//       if(propinaUser >= MaxPropina){
        
//         respuesta = "No eres un tacaño precio total es "+PrecioTotal + " dejaste una buena propina o incluso mas de lo que debias lo recomendable es aprox "+ MaxPropina+ " tu dejaste "+ propinaUser 
//         return respuesta
         
//       } else{
//         respuesta = "Valora a tu meserp lo que debiste dar es " + MaxPropina + " y tu dejaste " + propinaUser

//          return respuesta
//       }
      
// }








