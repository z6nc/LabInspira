import confetti from 'canvas-confetti';

const $ = (s) => document.querySelector(s)
const all = (a) => document.querySelectorAll(a)

const containerMsg = $("#ContainerMsg") 
const botones =  all(".verRespuesta")
const mirar  = all(".ContainerVer")

let visible  = false // sirve para hacer un toogle en el btn de ver

const reglas = {
    piedra: 'tijera',
    tijera: 'papel',
    papel: 'piedra'
  };
  
  const itemImg = {
    piedra: '/src/asset/piedra.webp',
    tijera: '/src/asset/tijera.webp',
    papel: '/src/asset/papel.webp'
  }

  function asignarImg(UserItem1 , UserItem2){
    const containarImgUser1 = $("#User1ItemImg");
    const containarImgUser2 = $("#User2ItemImg");
    containarImgUser1.src = itemImg[UserItem1];
    containarImgUser2.src = itemImg[UserItem2]; 
  }

  function validarDatos(j1, j2) {
    const jugada1 = j1.toLowerCase();
    const jugada2 = j2.toLowerCase();
    if (reglas[jugada1] && reglas[jugada2]) {
      return { jugada1, jugada2 };
    }
    return null;
  }
  
  function GanadorDelJuego(user1, user2) {
    if (user1 === user2) return "Empate";
    if (reglas[user1] === user2) return "Ganador Player 1";
    return "Ganador Player 2";
  }
  
   function MensajeGanador(msgGanador){
    const Msg = $("#winner") 
    containerMsg.style.display ="flex"
    Msg.textContent = msgGanador
   }
   
   function resetGame(){
    containerMsg.style.removeProperty("display");
   }

  function GameStart() {
    const itemUser1 = $("#User1-select").value; 
    const itemUser2 = $("#User2-select").value;
    const datos = validarDatos(itemUser1, itemUser2)
    const {jugada1 , jugada2} = datos;
    asignarImg(jugada1, jugada2);
    const GanadorGame = GanadorDelJuego(jugada1, jugada2)
    confetti(); 
    MensajeGanador(GanadorGame)
    
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('IniciarGame').addEventListener('click', GameStart);
    document.getElementById('resetar').addEventListener('click', resetGame);

    botones.forEach((btn, indexBtn) => {
      btn.addEventListener('click', () => {
        visible = !visible
          mirar.forEach((m , indexM) => {
            if(indexBtn  === indexM){
              m.style.display = visible ? "block" : "none";
            } 
        });
      });
    });

  });