window.onload = function() {
  let TestimonioCard = [];

  function newTestimonioCard(event) {
    event.preventDefault()
      let photoElement = document.getElementById("imagen");
      let namesElement = document.getElementById("nombre");
      let jobsElement = document.getElementById("trabajo");
      let commentElement = document.getElementById("comentario");
      let ratingElement = document.getElementById("calificacion");

      if (photoElement && namesElement && jobsElement && commentElement && ratingElement) {
          let photo = photoElement.value;
          let names = namesElement.value;
          let jobs = jobsElement.value;
          let comment = commentElement.value;
          let rating = ratingElement.value;
          document.getElementById("form").reset();

          // Validar que todos los campos estén llenos
       if (photo === "" || names === "" || jobs === "" || comment === "" || rating === "") {
              alert("Por favor, rellene todos los campos.");
              return;
          }

          const newTestimony = {
              id: TestimonioCard.length + 1,
              name: names,
              job: jobs,
              img: photo,
              comment: comment,
              rating: rating,
          };

          TestimonioCard.push(newTestimony);

          showTestimonyCard();
      } else {
          console.error("Uno o más elementos no existen en el DOM.");
      }
  }
  

  function showTestimonyCard() {
      let commentarios = document.querySelectorAll(".comments");
      let imgs = document.querySelectorAll(".imageUser");
      let names = document.querySelectorAll(".nameUser");
      let jobUsers = document.querySelectorAll(".jobuser");

      // Solo mostrar si hay al menos un testimonio
      if (TestimonioCard.length > 0) {
          const testimonio = TestimonioCard[TestimonioCard.length - 1];

          // Iterar sobre cada comentario (si hay varios)
          commentarios.forEach(commentario => {
              commentario.innerHTML = `${testimonio.comment}`;
          });

          // Iterar sobre cada imagen de usuario (si hay varias)
          imgs.forEach(img => {
              img.src = `${testimonio.img}`;

              // Si la imagen no se carga, mostrar una imagen predeterminada
              img.onerror = function() {
                  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s";
              };
          });

          // Iterar sobre cada nombre de usuario
          names.forEach(name => {
              name.innerText = `${testimonio.name}`;
          });

          // Iterar sobre cada trabajo de usuario
          jobUsers.forEach(jobUser => {
              jobUser.innerText = `${testimonio.job}`;
          });
      }
  }

  // Añadir un único event listener al botón que llama a newTestimonioCard
  document.querySelector(".showButton").addEventListener("click", newTestimonioCard);
};
