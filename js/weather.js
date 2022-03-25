


function onGeoLocationSuccess(info)
{
    const latitude=info.coords.latitude;
    const longitude=info.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherAPIKey}&units=metric`
    fetch(url).then(response=>response.json().then(data=>
        {
            const locationName=data.name;
            const currentWeather=data.weather[0].main;

            const weather = document.querySelector("#weather span:first-child");
            const city=document.querySelector("#weather span:last-child");
            weather.innerText=currentWeather;
            city.innerText=locationName;

           
        }))
}

function onGeoLocationFail()
{
    alert("Could not display Weather");
}

navigator.geolocation.getCurrentPosition(onGeoLocationSuccess,onGeoLocationFail);
