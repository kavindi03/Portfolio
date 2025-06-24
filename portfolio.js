document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);
    if(targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const texts = [
  "Hi, I am Kavindi Pankaji",
  "I am a UI/UX Designer",
  "I am a Web Developer",
  "I am a Mobile App Designer"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      setTimeout(type, 500);
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
})();
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const animatedElements = document.querySelectorAll(
  ".section, .skill-box, .cert-box, .project-box, .service-box, .edu-box, .video-container"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(el => {
  el.classList.add("fade-init"); 
  observer.observe(el);
});
const profileImage = document.querySelector(".hero-section img");
if (profileImage) {
  profileImage.style.animation = "none";
  profileImage.offsetHeight; 
  profileImage.style.animation = null;
}

const skillBoxes = document.querySelectorAll(".skill-box");
skillBoxes.forEach(box => {
  box.addEventListener("mouseenter", () => {
    const icons = box.querySelectorAll("li i");
    icons.forEach(icon => icon.classList.add("icon-glow"));
  });
  box.addEventListener("mouseleave", () => {
    const icons = box.querySelectorAll("li i");
    icons.forEach(icon => icon.classList.remove("icon-glow"));
  });
});
