let googlechromeWindow = document.querySelector(".app-googlechrome-window");
let googlechromeBar = document.querySelector(".app-googlechrome-window-bar");
let googlechromeResizeBar = document.querySelector(".app-googlechrome-window-resizebar");
let googlechromeMaximizeIcon = document.querySelector(".app-googlechrome-window-resizebar-maximize-icon");
let googlechromeCloseIcon = document.querySelector(".app-googlechrome-window-resizebar-close-icon");
let googlechromeTitleboxIcon = document.querySelector(".app-googlechrome-window-space-titlebox-logo");
let googlechromeInputboxIcon = document.querySelector(".app-googlechrome-window-space-inputbox-logo");
let googlechromeInput = document.querySelector(".app-googlechrome-window-space-inputbox-input");
let googlechromeResults = document.querySelector(".app-googlechrome-window-space-inputbox-resultsbar");
let googlechromeMainScreen = document.querySelector(".app-googlechrome-window-space-screen");
let googlechromeResultsOne = document.querySelector(".app-googlechrome-window-space-screen-one");
let googlechromeResultsTwo = document.querySelector(".app-googlechrome-window-space-screen-two");
let googlechromeResultsThree = document.querySelector(".app-googlechrome-window-space-screen-three");
let googlechromeResultsFour = document.querySelector(".app-googlechrome-window-space-screen-four");

let googlechromeMaximizeButton = document.querySelector(".app-googlechrome-window-resizebar-maximize");
let googlechromeCloseButton = document.querySelector(".app-googlechrome-window-resizebar-close");

googlechromeMaximizeButton.addEventListener("click", maximizeGoogleChromeWindow);
googlechromeCloseButton.addEventListener("click", closeGoogleChromeWindow);

function maximizeGoogleChromeWindow() {
    googlechromeWindow.classList.toggle("maximize-googlechrome");
    googlechromeBar.classList.toggle("scale-googlechrome-bar");
    googlechromeResizeBar.classList.toggle("scale-googlechrome-resizebar");
    googlechromeMaximizeIcon.classList.toggle("scale-googlechrome-maximize-icon");
    googlechromeCloseIcon.classList.toggle("scale-googlechrome-close-icon");
    googlechromeTitleboxIcon.classList.toggle("scale-googlechrome-titlebox-logo");
    googlechromeInputboxIcon.classList.toggle("translate-googlechrome-inputbox-logo");
    googlechromeInput.classList.toggle("scale-googlechrome-inputbox-input");
    googlechromeResults.classList.toggle("scale-googlechrome-inputbox-resultsbar");
}

function closeGoogleChromeWindow() {
    googlechromeWindow.style.display = "none";
    googlechromeMainScreen.classList.toggle("hide-googlechrome-screen");
    googlechromeResultsOne.classList.toggle("hide-googlechrome-screen-one");
    googlechromeResultsTwo.classList.toggle("hide-googlechrome-screen-two");
    googlechromeResultsThree.classList.toggle("hide-googlechrome-screen-three");
    googlechromeResultsFour.classList.toggle("hide-googlechrome-screen-four");
}