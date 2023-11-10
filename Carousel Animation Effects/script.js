const CARDS = 10;
const MAX_VISIBILITY = 3;
let active = 2;

function createCard(title, content) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;
  return card;
}

function createCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  if (active > 0) {
    const leftNav = document.createElement("button");
    leftNav.className = "nav left";
    leftNav.innerHTML = "<span><</span>";
    leftNav.addEventListener("click", () => setActive(active - 1));
    carousel.appendChild(leftNav);
  }

  for (let i = 0; i < CARDS; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    const offset = (active - i) / 3;
    const direction = Math.sign(active - i);
    const absOffset = Math.abs(active - i) / 3;
    cardContainer.style.setProperty("--active", i === active ? 1 : 0);
    cardContainer.style.setProperty("--offset", offset);
    cardContainer.style.setProperty("--direction", direction);
    cardContainer.style.setProperty("--abs-offset", absOffset);
    cardContainer.style.pointerEvents = active === i ? "auto" : "none";
    cardContainer.style.opacity =
      Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1";
    cardContainer.style.display =
      Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block";
    const card = createCard(`Card ${i + 1}`, "Lorem ipsum dolor sit amet...");
    cardContainer.appendChild(card);
    carousel.appendChild(cardContainer);
  }

  if (active < CARDS - 1) {
    const rightNav = document.createElement("button");
    rightNav.className = "nav right";
    rightNav.innerHTML = "<span>></span>";
    rightNav.addEventListener("click", () => setActive(active + 1));
    carousel.appendChild(rightNav);
  }
}

function animateCardTransition(newActive) {
  const carousel = document.getElementById("carousel");
  const cardContainers = carousel.querySelectorAll(".card-container");

  cardContainers.forEach((container, i) => {
    container.style.transition = "";
    const offset = (newActive - i) / 3;
    const direction = Math.sign(newActive - i);
    const absOffset = Math.abs(newActive - i) / 3;
    container.style.setProperty("--active", i === newActive ? 1 : 0);
    container.style.setProperty("--offset", offset);
    container.style.setProperty("--direction", direction);
    container.style.setProperty("--abs-offset", absOffset);
    container.style.pointerEvents = newActive === i ? "auto" : "none";
    container.style.opacity =
      Math.abs(newActive - i) >= MAX_VISIBILITY ? "0" : "1";
    container.style.display =
      Math.abs(newActive - i) > MAX_VISIBILITY ? "none" : "block";
  });
  active = newActive; // Update the active card
}

function setActive(newActive) {
  if (newActive >= 0 && newActive < CARDS) {
    animateCardTransition(newActive);
  }
}

createCarousel();
