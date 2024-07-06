let textBar = document.querySelector(".app-bin-window-textbar");

let spaceOne = document.querySelector(".app-bin-window-space-1");
let spaceTwo = document.querySelector(".app-bin-window-space-2");
let spaceThree = document.querySelector(".app-bin-window-space-3");

spaceOne.classList.remove("app-bin-window-space-1-hover");
spaceTwo.classList.remove("app-bin-window-space-2-hover");
spaceThree.classList.remove("app-bin-window-space-3-hover");

if (spaceOne.innerHTML && spaceTwo.innerHTML && spaceThree.innerHTML == 0) {
    console.log("There are empty files!");
    dontHoverOne();
    dontHoverTwo();
    dontHoverThree();
}

if (spaceOne.innerHTML != 0) {
    textBar.style.display = "none";
    hoverOverOne();
    hoverOutOne();
}

if (spaceTwo.innerHTML != 0) {
    textBar.style.display = "none";
    hoverOverTwo();
    hoverOutTwo();
}

if (spaceThree.innerHTML != 0) {
    textBar.style.display = "none";
    hoverOverThree();
    hoverOutThree();
}

function dontHoverOne() {
    spaceOne.classList.remove("app-bin-window-space-1-hover");
}

function dontHoverTwo() {
    spaceTwo.classList.remove("app-bin-window-space-2-hover");
}

function dontHoverThree() {
    spaceThree.classList.remove("app-bin-window-space-3-hover");
}

/*------------*/

function hoverOverOne() {
    spaceOne.addEventListener("mouseover", hoverOverOne);
    spaceOne.classList.add("app-bin-window-space-1-hover");
}

function hoverOutOne() {
    spaceOne.addEventListener("mouseout", hoverOutOne); 
    spaceOne.classList.remove("app-bin-window-space-1-hover");
}

function hoverOverTwo() {
    spaceTwo.addEventListener("mouseover", hoverOverTwo);
    spaceTwo.classList.add("app-bin-window-space-2-hover");
}

function hoverOutTwo() {
    spaceTwo.addEventListener("mouseout", hoverOutTwo);
    spaceTwo.classList.remove("app-bin-window-space-2-hover");
}

function hoverOverThree() {
    spaceThree.addEventListener("mouseover", hoverOverThree);
    spaceThree.classList.add("app-bin-window-space-3-hover");
}

function hoverOutThree() {
    spaceThree.addEventListener("mouseout", hoverOutThree);
    spaceThree.classList.remove("app-bin-window-space-3-hover");
}
