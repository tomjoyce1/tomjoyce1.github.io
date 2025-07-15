let startContainer = document.querySelector("#w11-start-section");
let startBtn = document.querySelector("#windows-div");

let widgetContainer = document.querySelector("#widget-section");
let widgetBtn = document.querySelector("#widget-div");

let shutdownContainer = document.querySelector("#spegni-section");
let shutdownBtn = document.querySelector(".spegni-pc-start-section");

let paddingContainer = document.querySelector(".padding-start");
let searchBtn = document.querySelector("#search-div");

let searchContainer = document.querySelector("#search-content");
let footerStartContainer = document.querySelector("#footer-start-section");

let windowsTab = document.querySelector(".windows-tab");

let topTabBar = document.querySelector(".topnavbar-tab");

let closeBtn = document.querySelector("#close-icon");
let maxBtn = document.querySelector("#max-icon");
let minBtn = document.querySelector("#min-icon");

let heightTab = document.querySelector(".coming-soon-tab");

let appIcons = document.querySelectorAll(".app-icon");
let tabName = document.querySelector(".nome-tab");
let tabImage = document.querySelector("#tab-image");
let comingSoonSpan = document.querySelector(".coming-soon-span");

let nav = document.querySelector("nav");
let navIconContainer = document.querySelector("#first-container");

let notifBtns = document.querySelector("#second-container");
let notifContainer = document.querySelector("#notification-section");

var vh = window.innerHeight / 100;
var vw = window.innerWidth / 100;

let isTopBarClicked = false;

let div = document.querySelector("#div");

let firstPositionX;
let firstPositionY;

let lastPositionX;
let lastPositionY;

// WINDOWS START animation from bottom to top
startBtn.addEventListener("click", function () {
  searchContainer.style.display = "none";
  paddingContainer.style.display = "grid";
  footerStartContainer.style.display = "flex";
  openOneWindowCloseOther();
});

// WIDGET animation from bottom to top
widgetBtn.addEventListener("click", function () {
  if (startContainer.classList.contains("on-visible-start")) {
    startContainer.classList.toggle("on-visible-start");
    widgetContainer.classList.toggle("on-visible-widget");
  } else {
    widgetContainer.classList.toggle("on-visible-widget");
  }
});

// Turn off the computer (graphically and virtually)
shutdownBtn.addEventListener("click", function () {
  shutdownContainer.classList.toggle("pc-off");
  alert(
    "Confirm Power Off? \nDon't do something you'll regret by powering this off. Hit 'esc' to cancel."
  );
});

shutdownContainer.addEventListener("click", function () {
  shutdownContainer.classList.toggle("pc-off");
});

// SEARCH function (beta)
searchBtn.addEventListener("click", function () {
  paddingContainer.style.display = "none";
  footerStartContainer.style.display = "none";
  searchContainer.style.display = "grid";
  openOneWindowCloseOther();
});

// Move the window tab
topTabBar.addEventListener("mousedown", function () {
  isTopBarClicked = true;
  console.log("mousedown");
  document.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var maxWidth = document.documentElement.scrollWidth;
    var maxX = maxWidth - windowsTab.offsetWidth;

    if (x <= 0) {
      moveTabLeft();
    } else if (y <= 0) {
      moveTabTop();
    } else if (x >= maxX) {
      moveTabRight();
    } else {
      windowsTab.style.transitionDuration = "0s";
      windowsTab.style.left = x + "px";
      windowsTab.style.top = y + "px";
      if (windowsTab.offsetHeight > 90 * vh) {
        windowsTab.style.height = "70vh";
      }
      windowsTab.style.removeProperty("transform");
    }
  };
});

// Stop moving the tab when not needed
document.addEventListener("mouseup", function () {
  document.onmousemove = null;
});

// for (let i = 0; i < appIcons.length; i++) {
//   comingSoonSpan.style.display = "grid";
//   tabImage.style.display = "none";
//   appIcons[i].addEventListener("click", function () {
//     windowsTab.style.display = "grid";
//     comingSoonSpan.style.display = "none";
//     tabImage.style.display = "grid";
//     let appName = appIcons[i].querySelector("span").textContent;
//     tabName.textContent = appName;
//     let appImage = appIcons[i].querySelector("img").src;
//     tabImage.src = appImage;
//   });
// }

// Button to close the tab (hide the tab)
closeBtn.addEventListener("click", function () {
  windowsTab.style.display = "none";
});

// Maximize the tab to screen size

// Open notifications panel
notifBtns.addEventListener("click", function () {
  notifContainer.classList.toggle("notification-on");
});

function moveTabLeft() {
  windowsTab.style.left = "0px";
  windowsTab.style.top = "0px";
  windowsTab.style.removeProperty("right");
  windowsTab.style.removeProperty("transform");
  windowsTab.style.width = "50vw";
  windowsTab.style.height = "calc(100vh - var(--nav-height))";
  windowsTab.style.transitionDuration = "0.5s";
  console.log("LEFT TAB");
}

// Create an icon in the nav and hide the tab (minimize)
minBtn.addEventListener("click", function () {
  windowsTab.style.display = "none";
  let newDiv = document.createElement("div");
  let newImg = document.createElement("img");
  newImg.src = tabImage.src;
  newDiv.appendChild(newImg);
  navIconContainer.appendChild(newDiv);
  console.log("MINIMIZED TAB");
});

maxBtn.addEventListener("click", function () {
  moveTabTop();
});

function moveTabTop() {
  windowsTab.style.left = "0px";
  windowsTab.style.top = "0px";
  windowsTab.style.removeProperty("right");
  windowsTab.style.removeProperty("transform");
  windowsTab.style.width = "100vw";
  windowsTab.style.height = "calc(100vh - var(--nav-height))";
  windowsTab.style.transitionDuration = "0.5s";
  console.log("TOP TAB");
}

function moveTabRight() {
  windowsTab.style.transform = "translateX(99%)";
  windowsTab.style.left = "0px";
  windowsTab.style.top = "0px";
  windowsTab.style.removeProperty("right");
  windowsTab.style.width = "50vw";
  windowsTab.style.height = "calc(100vh - var(--nav-height))";
  windowsTab.style.transitionDuration = "0.5s";
  console.log("RIGHT TAB");
}

// Open one window and close the other if needed
function openOneWindowCloseOther() {
  if (widgetContainer.classList.contains("on-visible-widget")) {
    widgetContainer.classList.toggle("on-visible-widget");
    startContainer.classList.toggle("on-visible-start");
  } else {
    startContainer.classList.toggle("on-visible-start");
  }
}

// Get the current time
function getDate() {
  let currentDate = new Date();

  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  let timeContainer = document.getElementById("orario-data");
  let calendarContainer = document.getElementById("calendario-data");

  if (hour < 10 && minutes < 10) {
    timeContainer.innerHTML = "0" + hour + ":" + "0" + minutes;
  } else if (hour < 10) {
    timeContainer.innerHTML = "0" + hour + ":" + minutes;
  } else if (minutes < 10) {
    timeContainer.innerHTML = hour + ":" + "0" + minutes;
  } else {
    timeContainer.innerHTML = hour + ":" + minutes;
  }

  if (day < 10 && month < 10) {
    calendarContainer.innerHTML = "0" + day + "/" + "0" + month + "/" + year;
  } else if (day < 10) {
    calendarContainer.innerHTML = "0" + day + "/" + month + "/" + year;
  } else if (month < 10) {
    calendarContainer.innerHTML = day + "/" + "0" + month + "/" + year;
  } else {
    calendarContainer.innerHTML = day + "/" + month + "/" + year;
  }

  document.getElementById("sistema-data").title =
    timeContainer.innerHTML + "  " + calendarContainer.innerHTML;

  setTimeout(function () {
    getDate();
  }, 60000);
}

// Initialize functions
getDate();
