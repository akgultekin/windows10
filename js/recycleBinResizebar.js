let binWindow = document.querySelector(".app-bin-window");
let binBar = document.querySelector(".app-bin-window-bar");
let binSign = document.querySelector(".app-bin-window-bar-sign");
let binResizeBar = document.querySelector(".app-bin-window-resizebar");
let binMaximizeIcon = document.querySelector(".app-bin-window-resizebar-maximize-icon");
let binCloseIcon = document.querySelector(".app-bin-window-resizebar-close-icon");

let binMaximizeButton = document.querySelector(".app-bin-window-resizebar-maximize");
let binCloseButton = document.querySelector(".app-bin-window-resizebar-close");

binMaximizeButton.addEventListener("click", maximizeBinWindow);
binCloseButton.addEventListener("click", closeBinWindow);

function maximizeBinWindow() {
    binWindow.classList.toggle("maximize-bin");
    binBar.classList.toggle("scale-bin-bar");
    binSign.classList.toggle("translate-bin-sign");
    binResizeBar.classList.toggle("scale-bin-resizebar");
    binMaximizeIcon.classList.toggle("scale-bin-maximize-icon");
    binCloseIcon.classList.toggle("scale-bin-close-icon");
}

function closeBinWindow() {
    binWindow.style.display = "none";
}