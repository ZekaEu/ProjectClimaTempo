const apiKey = 'd06cdb298fafc83c520d5ab677fc477e';
const maps_key = 'My_CMazeUglQ2OavNGCIk6LJbb4_5WneruUd-y0ACW8'; // heremaps
const cityDOM = document.querySelector(".city");
const iconDOM = document.querySelector(".icon");
const descDOM = document.querySelector(".description");
const tempDOM = document.querySelector(".temp");
const mmaxDOM = document.querySelector(".min-max");
const windDOM = document.querySelector(".frase");
const weatDOM = document.querySelector(".weather");
const sBarDOM = document.querySelector(".search-bar");
const mapaDOM = document.getElementById('mapContainer');

const getMap = (lat, lon) => {
// * Boilerplate map initialization code starts below:
// */
//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
 const platform = new H.service.Platform({
  apikey: maps_key
});
// Obtain the default map types from the platform object:
const defaultLayers = platform.createDefaultLayers();
// Instantiate (and display) a map object:
const map = new H.Map(
  mapaDOM,
    defaultLayers.vector.normal.map,
  {
    zoom: 13,
    center: { lat: lat, lng: lon }
  });
};

const getPhrases = () => {
  const frases = ['Sorria para quem você ama :)', 'Hidrate-se e coma frutas :)', 'Mande uma mensagem positiva para alguém :)', 'Sonhe alto e voe ainda mais alto :)', 'Viver é o dom mais precioso :)', 'Abraçe as oportunidades que o hoje te oferece :)'];
  let num = Math.floor(Math.random() * 6);
  frases.forEach((frase, i) => {
    if (i === num) {
      windDOM.innerText = frase;
    };
});
};

const displayWeather = (data) => {
  const { name } = data;
  const { country } = data.sys
  const { icon, description } = data.weather[0];
  const { temp, temp_min, temp_max } = data.main;
  const { lat, lon } = data.coord;
  cityDOM.innerText = `Clima em ${name}, ${country}`;
  iconDOM.src = `https://openweathermap.org/img/wn/${icon}.png`;
  descDOM.innerText = description;
  tempDOM.innerText = `${temp}°C`;
  mmaxDOM .innerText = `Temperatura Mínima de ${temp_min}°C\nTemperatura Máxima de ${temp_max}°C`;
  weatDOM.classList.remove("loading");
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
  getMap(lat, lon);
  getPhrases();
};

const fetchAPI = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        alert("Clima não encontrado.");
        throw new Error("Clima não encontrado.");
      }
      return response.json();
    })
    .then((data) => displayWeather(data));
};

const search = () => {
  fetchAPI(sBarDOM.value);
  mapaDOM.lastChild.remove();
  getPhrases();
};

document.querySelector(".search button").addEventListener("click", () => {
  search();
});

sBarDOM.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      search();
    }
  });

fetchAPI("São Paulo");
