function updateTime(){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");

let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do, MMMM");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss:SSS [<small>]A[</small>]"
);

//Paris
let parisElement = document.querySelector("#paris");
let ParisDateElement = parisElement.querySelector(".date");

let ParisTimeElement = parisElement.querySelector(".time");

let ParisTime = moment().tz("Europe/Paris");
ParisDateElement.innerHTML = ParisTime.format("dddd Do, MMMM");
ParisTimeElement.innerHTML = ParisTime.format("h:mm:ss:SSS [<small>]A[</small>]"
);
}
updateTime();
setInterval (updateTime,1);