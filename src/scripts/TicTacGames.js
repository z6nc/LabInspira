     function  TicTacGames(){
        const boards = document.getElementById('board'); // Obtener el contenedor principal
        if (boards) { // Verificar que el elemento existe
            const board = document.createElement('div');
            board.classList.add('border border-white');
             
            boards.appendChild(board); // Agregar el nuevo div dentro de #board
        }
        
    }
    
    document.addEventListener("DOMContentLoaded", TicTacGames);