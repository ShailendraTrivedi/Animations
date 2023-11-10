function rain() {
  let amount = 500;
  let body = document.querySelector("body");
  let i = 0;
  while (i < amount) {
    let drop = document.createElement("i");
    let size = Math.random() * 10;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 20;
    drop.style.width = size + "px";
    drop.style.height = size + "px";
    drop.style.left = posX + "px";
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = duration + "s";
    body.appendChild(drop);
    i++;
  }
}
rain();
