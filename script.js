// Initialize Lucide icons ONCE
lucide.createIcons();

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

// Load saved theme immediately (before page renders)
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);

// Set initial icon visibility
if (savedTheme === "dark") {
  moonIcon.classList.add("hidden");
  sunIcon.classList.add("visible");
} else {
  moonIcon.classList.add("visible");
  sunIcon.classList.add("hidden");
}

themeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Update theme
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Toggle icons
  if (newTheme === "dark") {
    moonIcon.classList.remove("visible");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
    sunIcon.classList.add("visible");
  } else {
    sunIcon.classList.remove("visible");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    moonIcon.classList.add("visible");
  }
});
