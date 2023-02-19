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

// Need display history funtion & function to add the history//


function citySubmit (event) {

let citysearch = document.getElementById("mycity").value; 
    event.preventDefault();
    console.log(citysearch);

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citysearch + "&units=imperial" + "&appid=" + APIKey;
city.textContent = citysearch; 


    fetch(queryURL)
   
    .then(function (response) {
        return response.json();
    })
   
    .then(function (data) {
        console.log('Let me see some data \n----------');
        console.log(data);
            temp.textContent = "Temperature: " + data.main.temp + " °F"
            wind.textContent = "Wind: " + data.wind.speed + " MPH"
            humidity.textContent = "Humidity: " + data.main.humidity + " %"
      });
    return;
    


}