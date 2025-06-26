document.getElementById("start-button").addEventListener("click", () => {
  const menu = document.getElementById("start-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

function openWindow(appName) {
  const container = document.getElementById("window-container");
  const win = document.createElement("div");
  win.classList.add("window");
  win.innerHTML = `
    <div class="window-header">${appName}
      <button onclick="this.closest('.window').remove()" style="float:right;">X</button>
    </div>
    <div class="window-content">
      <iframe src="../programs/${appName}/index.html" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  `;
  win.style.top = `${100 + Math.random() * 200}px`;
  win.style.left = `${100 + Math.random() * 200}px`;
  container.appendChild(win);
}

// Optional: Add drag behavior (bonus!)
