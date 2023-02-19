let APIKey = 'b23a3c309d3cc6ecad909e4ffc9c20d4'
//Current Date
let currentDate = dayjs().format('MMM D YYYY');
$("#currentDay").html(currentDate);

//Search Button
let searchBtn = $('#cityInput');
searchBtn.on("click", citySubmit)

let city = document.getElementById("displayCity")
let temp = document.getElementById("temperature")
let wind = document.getElementById("winds")
let humidity = document.getElementById("humidity")




function citySubmit (event) {

let citysearch = document.getElementById("mycity").value; 
    event.preventDefault();
    console.log(citysearch);

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citysearch + "&units=imperial" + "&appid=" + APIKey;


city.textContent = "City: " + citysearch; 
temp.textContent = "Temperature " + data[0].main.temp
wind.textContent = "Wind " + data[0].wind.speed
humidity.textContent = "Humidity " + data[0].main.humidity

    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Let me see some data \n----------');
        console.log(data);
      });
    return;


}