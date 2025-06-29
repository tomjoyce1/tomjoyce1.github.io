document.addEventListener("DOMContentLoaded", () => {
  // Define window functions

  function openWindow(id) {
    console.log("Trying to open: ", id);
    const win = document.getElementById(id);
    if (win) {
      win.style.display = "block";
      win.style.zIndex = Date.now();
    } else {
      console.error(`Window with id '${id}' not found in DOM`);
      // Debug - list all available popups
      const popups = document.querySelectorAll(".popup");
      console.log(
        "Available popups:",
        Array.from(popups).map((p) => p.id)
      );
    }
  }

  function closeWindow(id) {
    const win = document.getElementById(id);
    if (win) win.style.display = "none";
  }

  // Make functions globally available
  window.openWindow = openWindow;
  window.closeWindow = closeWindow;

  function makePopupsDraggable() {
    // Existing drag functionality
    document.querySelectorAll(".popup").forEach((win) => {
      const titleBar = win.querySelector(".title-bar");

      titleBar.onmousedown = null;

      let isDragging = false,
        offsetX,
        offsetY;

      titleBar.addEventListener("mousedown", (e) => {
        isDragging = true;

        const style = window.getComputedStyle(win);
        const left = parseInt(style.left);
        const top = parseInt(style.top);

        offsetX = e.clientX - left;
        offsetY = e.clientY - top;
        win.style.zIndex = Date.now(); // Bring to front
      });

      window.addEventListener("mouseup", () => (isDragging = false));
      window.addEventListener("mousemove", (e) => {
        if (isDragging) {
          win.style.left = `${e.clientX - offsetX}px`;
          win.style.top = `${e.clientY - offsetY}px`;
        }
      });
    });
  }

  makePopupsDraggable();

  window.makePopupsDraggable = makePopupsDraggable;
  console.log("All handlers set up");
});
