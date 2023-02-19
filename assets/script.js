let APIKey = 'b23a3c309d3cc6ecad909e4ffc9c20d4'

var currentDate = dayjs().format('MMM D YYYY');
$("#currentDay").html(currentDate);

let citysearch = document.getElementById("mycity").value; 
let currentCity = '';
let searchBtn = $('#cityInput');


let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + APIKey;



    


searchBtn.on("click", citySubmit)

function citySubmit (event) {
    event.preventDefault();
    currentCity = citysearch;
    console.log(currentCity);

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