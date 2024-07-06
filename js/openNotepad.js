let openNotepad = document.querySelector(".app-notepad-window");
let appNotepad = document.querySelector(".app-notepad");
let taskbarNotepad = document.querySelector(".taskbar-app-notepad")

appNotepad.addEventListener("dblclick", openWindow);
taskbarNotepad.addEventListener("click", openWindow);

function openWindow() {
    openNotepad.style.display = "block";
}