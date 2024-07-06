let openGoogleChrome = document.querySelector(".app-googlechrome-window");
let appGoogleChrome = document.querySelector(".app-googlechrome");
let taskbarGoogleChrome = document.querySelector(".taskbar-app-googlechrome");

appGoogleChrome.addEventListener("dblclick", openWindow);
taskbarGoogleChrome.addEventListener("click", openWindow);

function openWindow() {
    openGoogleChrome.style.display = "block";
}