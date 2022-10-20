const form = document.querySelector('form')
let search = document.getElementById('search')
let weather = document.querySelector('#weather')

/*
getWeather= async (city)=>{
    weather.innerHTML=`<h4>Loading...</h4>`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fced3f07d371271b167d454426a8ead&units=metric`
    const response=await fetch(url);
    // console.log(response)
    const data=await response.json()
    // console.log(data)
    return showWeather(data)
}
// 0fced3f07d371271b167d454426a8ead


showWeather=(data)=>{
    console.log(data);
    if(data.cod==404){
        weather.innerHTML=`<h4>City not found</h4>`;
        return;
    }
    weather.innerHTML=` <div>
                            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                        </div>
                        <div>
                            <h2>${data.main.temp} &#8451;</h2>
                            <h5>${data.weather[0].description}</h5>
                        </div>`
                        ;
}
*/

function getWeather(city) {
    weather.innerHTML=`<h4>Loading...</h4>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fced3f07d371271b167d454426a8ead&units=metric`;
    fetch(url).then(resonse => resonse.json()).then((data) => {
        console.log(data);
        if (data.cod == 404) {
            weather.innerHTML = `<h4>City not found</h4>`;
            return;
        }
        weather.innerHTML = ` <div>
                                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                            </div>
                            <div>
                                <h2>${data.main.temp} &#8451;</h2>
                                <h5>${data.weather[0].description}</h5>
                            </div>`
                        ;
    })
}

form.addEventListener('submit', function (event) {
    // console.log(search.value);
    event.preventDefault();
    getWeather(search.value);
});