// Récupération des éléments HTML5
const cards = document.querySelectorAll(".card");

// Déclaration de la fonction removeActiveClasses qui va permettre de retirer la classe active des cartes
const removeActiveClasses = () => {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};

cards.forEach((card) => {
  // Ecoute de l'événement "click" sur la div ayant la classe panel
  card.addEventListener("click", () => {
    removeActiveClasses(); // Appel de la fonction removeActiveClasses
    // Ajout de la classe active
    card.classList.add("active");
  });
});
