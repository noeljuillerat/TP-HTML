//
const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  const size = Math.random() * 200 + 100 + "px";
  const plusMinus = Math.random() > 0.5 ? 1 : -1; // condition ternaire

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  // Taille de la bulle
  bubble.style.height = size;
  bubble.style.width = size;

  // Direction de la bulle
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // Détruit la bulle au clic
    bubble.addEventListener("click", () => {
        counter++
        counterDisplay.textContent = counter;
    bubble.remove();
  });
  // Détruit la bulle après 8sec
    setTimeout(() => {
    bubble.remove();
    }, 8000);
};

setInterval(bubbleMaker, 300);


