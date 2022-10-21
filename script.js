const form = document.querySelector('form')
let search = document.getElementById('search')
let weather = document.querySelector('#weather')

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'rgb(54, 224, 150)';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

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