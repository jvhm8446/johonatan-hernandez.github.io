
const phrases = [
  "A Technology Enthusiast",
  "Problem Solver",
  "An AI Enthusiast",
  "A Passionate About Technology"
];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const typingSpeed = 100;

function startTypingEffect() {
  const typingText = document.getElementById("typing-text");
  if (!typingText) return;

  function type() {
    const current = phrases[currentPhrase];
    if (isDeleting) {
      typingText.textContent = current.substring(0, currentChar--);
      if (currentChar < 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }
    } else {
      typingText.textContent = current.substring(0, currentChar++);
      if (currentChar > current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
    }
    setTimeout(type, isDeleting ? 40 : typingSpeed);
  }

  type();
}

document.addEventListener("DOMContentLoaded", startTypingEffect);
