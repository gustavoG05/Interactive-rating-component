const rateSpans = document.querySelectorAll(".rate span");

rateSpans.forEach((span) => {
  span.addEventListener("click", function () {
    rateSpans.forEach((otherSpan) => {
      otherSpan.classList.remove("active");
    });

    this.classList.add("active");
  });
});

function setVisibility(id, id2, visibility, visibility2) {
  document.getElementById(id).style.display = visibility;
  document.getElementById(id2).style.display = visibility2;
}


const ratingSpans = document.querySelectorAll(".rate span");
// Adicione um ouvinte de evento a cada span
ratingSpans.forEach((span) => {
  span.addEventListener("click", function () {
    // Obtenha o valor do span selecionado
    const selectedRating = (this.textContent);
    // Exemplo: Armazene o valor selecionado em uma variável chamada "ratingValue"
    const ratingValue = selectedRating;
    document.getElementById("rate").innerHTML="You selected "+selectedRating+" out of 5"

  });
});
