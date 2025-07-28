// Animación para revelar elementos al hacer scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  for (const el of reveals) {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add("animated");
    }
  }
}

// Particle effect configuration
window.addEventListener("load", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffcc00" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 2, direction: "none", random: true }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } }
    }
  });
  revealOnScroll();
});

window.addEventListener("scroll", revealOnScroll);