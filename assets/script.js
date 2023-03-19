let APIKey = 'b23a3c309d3cc6ecad909e4ffc9c20d4'
//Current Date
let currentDate = dayjs().format('MMM D YYYY');
$("#currentDay").html(currentDate);

//Search Button
let searchBtn = $('#cityInput');
searchBtn.on("click", citySubmit) 
// Current Conditions
let city = document.getElementById("displayCity")
let temp = document.getElementById("temperature")
let wind = document.getElementById("winds")
let humidity = document.getElementById("humidity")
let lon = '';
let lat = '';
// 5 day forecast
let day1 = document.getElementById("day1")
let dayIcon = document.getElementById("d1-icon")
let dayTemp = document.getElementById("d1-temp")
let dayWinds = document.getElementById("d1-winds")
let dayHumidity = document.getElementById("d1-humidity")
let day2 = document.getElementById("day2")
let day2Icon = document.getElementById("d2-icon")
let day2Temp = document.getElementById("d2-temp")
let day2Winds = document.getElementById("d2-winds")
let day2Humidity = document.getElementById("d2-humidity")
let day3 = document.getElementById("day3")
let day3Icon = document.getElementById("d3-icon")
let day3Temp = document.getElementById("d3-temp")
let day3Winds = document.getElementById("d3-winds")
let day3Humidity = document.getElementById("d3-humidity")
let day4 = document.getElementById("day4")
let day4Icon = document.getElementById("d4-icon")
let day4Temp = document.getElementById("d4-temp")
let day4Winds = document.getElementById("d4-winds")
let day4Humidity = document.getElementById("d4-humidity")
let day5 = document.getElementById("day5")
let day5Icon = document.getElementById("d5-icon")
let day5Temp = document.getElementById("d5-temp")
let day5Winds = document.getElementById("d5-winds")
let day5Humidity = document.getElementById("d5-humidity")

//History List 
let history = document .querySelector(".pastSearches")
let historyList = []; 


function citySubmit (event) {

let citysearch = document.getElementById("mycity").value; 
    event.preventDefault();
    console.log("City: " + citysearch);

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citysearch + "&units=imperial" + "&appid=" + APIKey;
    city.textContent = citysearch; 


function historyBtn(citysearch) { 

    history.innerHTML = ""; 

       historyList.push(citysearch)
       localStorage.setItem("Cities", JSON.stringify(historyList))
       console.log("This array : " + " " + historyList + " ")
       getHistory(); 

}

function getHistory(citysearch){
   
    for (let index = 0; index < historyList.length; index++) {
        let newBtn = document.createElement("addBtn"); 
        newBtn.setAttribute("type", "button")
        newBtn.setAttribute("class", "list")
        newBtn.setAttribute("data-searched", historyList[index])
        newBtn.textContent = historyList[index]
        history.append(newBtn)

  
        newBtn.addEventListener("click", getSearch)
   
    }


}

    fetch(queryURL)
   
    .then(function (response) {
        return response.json();
  
    })
   
    .then(function (data) {
        let longitude = data.coord.lon
        let latitude = data.coord.lat
        console.log('Let me see some current data \n----------');
        console.log(data);
            temp.textContent = "Temperature: " + data.main.temp + " °F"
            wind.textContent = "Wind: " + data.wind.speed + " MPH"
            humidity.textContent = "Humidity: " + data.main.humidity + " %"
            console.log("Longitiude: " + longitude);
            console.log("Latitude: " + latitude);

            //Gets Image
            // var iconUrl = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

            // var image = document.createElement("img");
            // image.src = iconUrl;
            // citysearch.appendChild(image);
      
        // 5 day forecast
        lon = longitude
        lat = latitude
            let queryURL5day = "http://api.openweathermap.org/data/2.5/forecast?&lat=" +lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial"; 

        fetch(queryURL5day)

        .then(function (response){
            return response.json();
        })

        .then(function (data5){
            console.log('Let me see some 5 day data \n----------');
            console.log(data5);

        let Icon = `http://openweathermap.org/img/wn/${data5.list[0].weather[0].icon}@2x.png`;
        let Icon2 = `http://openweathermap.org/img/wn/${data5.list[8].weather[0].icon}@2x.png`;
        let Icon3 = `http://openweathermap.org/img/wn/${data5.list[16].weather[0].icon}@2x.png`;
        let Icon4 = `http://openweathermap.org/img/wn/${data5.list[24].weather[0].icon}@2x.png`;
        let Icon5 = `http://openweathermap.org/img/wn/${data5.list[32].weather[0].icon}@2x.png`;
     

        let img = document.createElement("img")
        img.src = Icon
        let img2 = document.createElement("img")
        img2.src = Icon2
        let img3 = document.createElement("img")
        img3.src = Icon3
        let img4 = document.createElement("img")
        img4.src = Icon4
        let img5 = document.createElement("img")
        img5.src = Icon5

        day1.textContent = data5.list[0].dt_txt
        day1.appendChild(img);
        dayTemp.textContent = "Temp: " + data5.list[0].main.temp + " °F"
        dayWinds.textContent = "Winds: " + data5.list[0].wind.speed + " MPH"
        dayHumidity.textContent = "Humidity: " + data5.list[0].main.humidity + " %"

        day2.textContent = data5.list[8].dt_txt
        day2.appendChild(img2);
        day2Temp.textContent = "Temp: " + data5.list[8].main.temp + " °F"
        day2Winds.textContent = "Winds: " + data5.list[8].wind.speed + " MPH"
        day2Humidity.textContent = "Humidity: " + data5.list[8].main.humidity + " %"

        day3.textContent = data5.list[16].dt_txt
        day3.appendChild(img3);
        day3Temp.textContent = "Temp: " + data5.list[16].main.temp + " °F"
        day3Winds.textContent = "Winds: " + data5.list[16].wind.speed + " MPH"
        day3Humidity.textContent = "Humidity: " + data5.list[16].main.humidity + " %"

        day4.textContent = data5.list[24].dt_txt
        day4.appendChild(img4);
        day4Temp.textContent = "Temp: " + data5.list[24].main.temp + " °F"
        day4Winds.textContent = "Winds: " + data5.list[24].wind.speed + " MPH"
        day4Humidity.textContent = "Humidity: " + data5.list[24].main.humidity + " %"

        day5.textContent = data5.list[32].dt_txt
        day5.appendChild(img5);
        day5Temp.textContent = "Temp: " + data5.list[32].main.temp + " °F"
        day5Winds.textContent = "Winds: " + data5.list[32].wind.speed + " MPH"
        day5Humidity.textContent = "Humidity: " + data5.list[32].main.humidity + " %"

        historyBtn(citysearch); 


        })
      
        });
    return;

}

//History Request///
function getSearch(){
    console.log(this.dataset.searched);
    let city = this.dataset.searched; 
let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;
    city= document.getElementById("mycity").value; 

fetch(queryURL)
   
.then(function (response) {
    return response.json();

})

.then(function (data) {
    let longitude = data.coord.lon
    let latitude = data.coord.lat
    console.log('Let me see some current data \n----------');
    console.log(data);
        temp.textContent = "Temperature: " + data.main.temp + " °F"
        wind.textContent = "Wind: " + data.wind.speed + " MPH"
        humidity.textContent = "Humidity: " + data.main.humidity + " %"
        console.log("Longitiude: " + longitude);
        console.log("Latitude: " + latitude);
  
    // 5 day forecast
    lon = longitude
    lat = latitude
        let queryURL5day = "http://api.openweathermap.org/data/2.5/forecast?&lat=" +lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial"; 

    fetch(queryURL5day)

    .then(function (response){
        return response.json();
    })

    .then(function (data5){
        console.log('Let me see some 5 day data \n----------');
        console.log(data5);

    let Icon = `http://openweathermap.org/img/wn/${data5.list[0].weather[0].icon}@2x.png`;
    let Icon2 = `http://openweathermap.org/img/wn/${data5.list[8].weather[0].icon}@2x.png`;
    let Icon3 = `http://openweathermap.org/img/wn/${data5.list[16].weather[0].icon}@2x.png`;
    let Icon4 = `http://openweathermap.org/img/wn/${data5.list[24].weather[0].icon}@2x.png`;
    let Icon5 = `http://openweathermap.org/img/wn/${data5.list[32].weather[0].icon}@2x.png`;
 

    let img = document.createElement("img")
    img.src = Icon
    let img2 = document.createElement("img")
    img2.src = Icon2
    let img3 = document.createElement("img")
    img3.src = Icon3
    let img4 = document.createElement("img")
    img4.src = Icon4
    let img5 = document.createElement("img")
    img5.src = Icon5

    day1.textContent = data5.list[0].dt_txt
    day1.appendChild(img);
    dayTemp.textContent = "Temp: " + data5.list[0].main.temp + " °F"
    dayWinds.textContent = "Winds: " + data5.list[0].wind.speed + " MPH"
    dayHumidity.textContent = "Humidity: " + data5.list[0].main.humidity + " %"

    day2.textContent = data5.list[8].dt_txt
    day2.appendChild(img2);
    day2Temp.textContent = "Temp: " + data5.list[8].main.temp + " °F"
    day2Winds.textContent = "Winds: " + data5.list[8].wind.speed + " MPH"
    day2Humidity.textContent = "Humidity: " + data5.list[8].main.humidity + " %"

    day3.textContent = data5.list[16].dt_txt
    day3.appendChild(img3);
    day3Temp.textContent = "Temp: " + data5.list[16].main.temp + " °F"
    day3Winds.textContent = "Winds: " + data5.list[16].wind.speed + " MPH"
    day3Humidity.textContent = "Humidity: " + data5.list[16].main.humidity + " %"

    day4.textContent = data5.list[24].dt_txt
    day4.appendChild(img4);
    day4Temp.textContent = "Temp: " + data5.list[24].main.temp + " °F"
    day4Winds.textContent = "Winds: " + data5.list[24].wind.speed + " MPH"
    day4Humidity.textContent = "Humidity: " + data5.list[24].main.humidity + " %"

    day5.textContent = data5.list[32].dt_txt
    day5.appendChild(img5);
    day5Temp.textContent = "Temp: " + data5.list[32].main.temp + " °F"
    day5Winds.textContent = "Winds: " + data5.list[32].wind.speed + " MPH"
    day5Humidity.textContent = "Humidity: " + data5.list[32].main.humidity + " %"


    })
  
    });
return;
}




