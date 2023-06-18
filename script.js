const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "781987f6ebmsh71dc9cf06e9a0f5p1b3928jsn2d0340e90757",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = getTime(response.sunrise);
      sunset.innerHTML = getTime(response.sunset);
    })
    .catch((err) => console.errro(err));
};

const getTime = (epoch) => {
  let d = new Date(epoch * 1000);
  return d.toLocaleString();
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

let usage_guide = document.getElementById("usage_guide");
let usg_guide = document.querySelector(".usg_guide");

usg_guide.addEventListener("click", () => {
  usage_guide.style.visibility = "visible";
  // usage_guide.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  const isClickInsidePopupCard = usage_guide.contains(event.target);
  if (event.target != usg_guide) {
    if (!isClickInsidePopupCard) {
      usage_guide.style.visibility = "hidden";
    }
  }
});
