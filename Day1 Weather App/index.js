const apikey = "46cdbe932f1224d1019926307ffdb70e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".input");
const serachBtn = document.querySelector(".btn");
const icon = document.querySelector(".icon");

console.log(serachBox);
console.log(serachBtn);


async function checkWeather(city){
    const response = await fetch(apiurl  + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main = "Clouds"){
        icon.src = "./img/clouds.png";
    }
   else if(data.weather[0].main = "Clear"){
        icon.src = "./img/clear.png";
    }
    else if(data.weather[0].main = "Rain"){
        icon.src = "./img/rain.png";
    }
    else if(data.weather[0].main = "Drizzle"){
        icon.src = "./img/drizzle.png";
    }
    else if(data.weather[0].main = "Mist"){
        icon.src = "./img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
   
}

serachBtn.addEventListener("click", ()=>{
    checkWeather(serachBox.value);
})