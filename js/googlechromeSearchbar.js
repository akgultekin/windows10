let googlechromeSearchbar = document.querySelector(".app-googlechrome-window-space-inputbox-input");
let googlechromeResultsbar = document.querySelector(".app-googlechrome-window-space-inputbox-resultsbar");

let googlechromeScreen = document.querySelector(".app-googlechrome-window-space-screen");

let googlechromeResultOne = document.querySelector(".app-googlechrome-window-space-inputbox-resultsbar-result1");
let googlechromeScreenOne = document.querySelector(".app-googlechrome-window-space-screen-one");

let googlechromeResultTwo = document.querySelector(".app-googlechrome-window-space-inputbox-resultsbar-result2");
let googlechromeScreenTwo = document.querySelector(".app-googlechrome-window-space-screen-two");

let googlechromeResultThree = document.querySelector(".app-googlechrome-window-space-inputbox-resultsbar-result3");
let googlechromeScreenThree = document.querySelector(".app-googlechrome-window-space-screen-three");

let googlechromeResultFour = document.querySelector(".app-googlechrome-window-space-inputbox-resultsbar-result4");
let googlechromeScreenFour = document.querySelector(".app-googlechrome-window-space-screen-four");

googlechromeSearchbar.addEventListener("focus", showResults);

googlechromeResultOne.addEventListener("click", resultOne);
googlechromeResultTwo.addEventListener("click", resultTwo);
googlechromeResultThree.addEventListener("click", resultThree);
googlechromeResultFour.addEventListener("click", resultFour);

function showResults() {
    googlechromeSearchbar.classList.toggle("style-googlechrome-inputbox-input");
    googlechromeResultsbar.classList.toggle("show-googlechrome-resultsbar");
}

function resultOne() {
    googlechromeScreen.classList.toggle("show-googlechrome-screen");
    googlechromeScreenOne.classList.toggle("show-googlechrome-screen-one");
}

function resultTwo() {
    googlechromeScreen.classList.toggle("show-googlechrome-screen");
    googlechromeScreenTwo.classList.toggle("show-googlechrome-screen-two");
}

function resultThree() {
    googlechromeScreen.classList.toggle("show-googlechrome-screen");
    googlechromeScreenThree.classList.toggle("show-googlechrome-screen-three");
}

function resultFour() {
    googlechromeScreen.classList.toggle("show-googlechrome-screen");
    googlechromeScreenFour.classList.toggle("show-googlechrome-screen-four");
}