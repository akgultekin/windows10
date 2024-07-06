const time = document.querySelector(".taskbar-timeoftheday-time-text");
const date = document.querySelector(".taskbar-timeoftheday-date-text");


function timeOfTheDay() {

    const hoursMinutes = new Date();
    const daysMonthsYear = new Date();
    
    let hours = hoursMinutes.getHours();

    let leadingDigitMinutes = (hoursMinutes.getMinutes() < 10 ? "0" : "");
    let minutes = hoursMinutes.getMinutes();

    let day = daysMonthsYear.getDate();

    let leadingDigitMonths = (daysMonthsYear.getMonth() < 10 ? "0" : "");
    let months = daysMonthsYear.getMonth() + 1; 

    let year = daysMonthsYear.getFullYear();

    time.innerHTML = hours + ":" + leadingDigitMinutes + minutes;
    date.innerHTML = day + "/" + leadingDigitMonths + months + "/" + year;
}

timeOfTheDay();
setInterval(timeOfTheDay, 60000);