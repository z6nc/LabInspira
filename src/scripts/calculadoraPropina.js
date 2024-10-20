function MaximaPropina(precioTotal){
    const PropinaMaxima = Math.round(precioTotal* 0.20)
    return PropinaMaxima

}

function MinimaPropina(precioTotal){
  const PropinaMinima = Math.round(precioTotal* 0.05)
  return PropinaMinima 
}



// funcion que recibe el precio total y el servicio y devuelve la propina total

function PropinaTotal(precioTotal , servicio){
  let Propina = 0;
  
  if(servicio == "Buena" ){
      Propina = MaximaPropina(precioTotal);
      return Propina
  } else if(servicio == "malo"){
      Propina = MinimaPropina(precioTotal);
      return Propina

  } else{
      console.log("elegie la calidad de servico")
  }
   
}







//Juego para adivinar la propina que dejara el usuario

function PropinaMesero (propinaUser){
    let PrecioTotal = Math.round(Math.random() * (1000 - 40 + 1) + 40);
    let  MaxPropina = MaximaPropina(PrecioTotal);
     
     let respuesta ="";
      if(propinaUser >= MaxPropina){
        
        respuesta = "No eres un tacaño precio total es "+PrecioTotal + " dejaste una buena propina o incluso mas de lo que debias lo recomendable es aprox "+ MaxPropina+ " tu dejaste "+ propinaUser 
        return respuesta
         
      } else{
        respuesta = "Valora a tu meserp lo que debiste dar es " + MaxPropina + " y tu dejaste " + propinaUser

         return respuesta
      }
      
}








