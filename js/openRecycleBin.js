let openBin = document.querySelector(".app-bin-window");
let appBin = document.querySelector(".app-bin");

appBin.addEventListener("dblclick", openWindow);

function openWindow() {
    openBin.style.display = "block";
}

