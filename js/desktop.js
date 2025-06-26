document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const startMenu = document.getElementById("start-menu");

  startButton.addEventListener("click", () => {
    startMenu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
      startMenu.classList.remove("open");
    }
  });
});

// Fake openWindow function for placeholder (can upgrade later)
function openWindow(appName) {
  window.open(`programs/${appName}/`, '_blank');
}
