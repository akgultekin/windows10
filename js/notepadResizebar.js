let notepadWindow = document.querySelector(".app-notepad-window");
let notepadBar = document.querySelector(".app-notepad-window-bar");
let notepadText = document.querySelector(".app-notepad-window-bar-text");
let notepadResizeBar = document.querySelector(".app-notepad-window-resizebar");
let notepadMaximizeIcon = document.querySelector(".app-notepad-window-resizebar-maximize-icon");
let notepadCloseIcon = document.querySelector(".app-notepad-window-resizebar-close-icon");

let notepadInputText = document.querySelector(".app-notepad-window-input");

let notepadMaximizeButton = document.querySelector(".app-notepad-window-resizebar-maximize");
let notepadCloseButton = document.querySelector(".app-notepad-window-resizebar-close");

notepadMaximizeButton.addEventListener("click", maximizeNotepadWindow);
notepadCloseButton.addEventListener("click", closeNotepadWindow);

function maximizeNotepadWindow() {
    notepadWindow.classList.toggle("maximize-notepad");
    notepadBar.classList.toggle("scale-notepad-bar");
    notepadText.classList.toggle("translate-notepad-text");
    notepadResizeBar.classList.toggle("scale-notepad-resizebar");
    notepadMaximizeIcon.classList.toggle("scale-notepad-maximize-icon");
    notepadCloseIcon.classList.toggle("scale-notepad-close-icon");
}

function closeNotepadWindow() {
    notepadWindow.style.display = "none";
}