let APIKey = 'b23a3c309d3cc6ecad909e4ffc9c20d4'

var currentDate = dayjs().format('MMM D YYYY');
$("#currentDay").html(currentDate);

let citysearch = document.getElementById("mycity"); 




// let cityInput = document.getElementById('mycity')

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citysearch + "&appid=" + APIKey;

//Need to have the user input working
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Let me see some data \n----------');
        console.log(data);
      });
    