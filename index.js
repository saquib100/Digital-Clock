setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();


let hourOfDay = timeNow.getHours();
   let minutes = timeNow.getMinutes();
   let seconds = timeNow.getSeconds();
   let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
   let today = weekDay[timeNow.getDay()];
   let months = timeNow.toLocaleString("default", { month: "long" });
   let year = timeNow.getFullYear();
   let period = "AM";


if(hourOfDay > 12) {
    hourOfDay -= 12;
    period = "PM";
}

if(hourOfDay == 0) {
    hourOfDay = 12;
    period = "AM";
}

hourOfDay = hourOfDay < 10 ? "0" + hourOfDay : hourOfDay;

minutes = minutes < 10 ? "0" + minutes : minutes;

seconds = seconds < 10 ? "0" + seconds : seconds;

let currentTime = hourOfDay + ":" + minutes + ":" + seconds + period;

document.getElementById('Clock').innerHTML =  currentTime + " " + today +" " + months + " " + year;
}


displayTime();