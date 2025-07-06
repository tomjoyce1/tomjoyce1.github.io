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
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      document.querySelectorAll(".popup").forEach((win) => {
        Object.assign(win.style, {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw", // use viewport units for full width
          height: "100vh", // use viewport units for full height
          overflow: "auto",
          margin: "0",
          padding: "0",
          zIndex: "9999",
        });
      });
    }

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

      // touch event listeners
      titleBar.addEventListener("touchstart", (e) => {
        isDragging = true;

        const initialTouchX = e.touches[0].clientX;
        const initialTouchY = e.touches[0].clientY;

        const initialPopupX = win.offsetLeft;
        const initialPopupY = win.offsetTop;

        win.dataset.initialTouchX = initialTouchX;
        win.dataset.initialTouchY = initialTouchY;
        win.dataset.initialPopupX = initialPopupX;
        win.dataset.initialPopupY = initialPopupY;
      });

      titleBar.addEventListener("touchmove", (e) => {
        if (isDragging) {
          const currentTouchX = e.touches[0].clientX;
          const currentTouchY = e.touches[0].clientY;

          const newPopupX =
            parseInt(win.dataset.initialPopupX) +
            (currentTouchX - parseInt(win.dataset.initialTouchX));
          const newPopupY =
            parseInt(win.dataset.initialPopupY) +
            (currentTouchY - parseInt(win.dataset.initialTouchY));

          win.style.left = `${newPopupX}px`;
          win.style.top = `${newPopupY}px`;
        }
      });

      titleBar.addEventListener("touchend", () => {
        isDragging = false;
        win.removeAttribute("data-initial-touch-x");
        win.removeAttribute("data-initial-touch-y");
        win.removeAttribute("data-initial-popup-x");
        win.removeAttribute("data-initial-popup-y");
      });
    });
  }

  makePopupsDraggable();

  window.makePopupsDraggable = makePopupsDraggable;
  console.log("All handlers set up");
});
