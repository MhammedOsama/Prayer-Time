
// our Cities
let cities = [
  {
    country: "EG",
    arabicName: "القاهرة",
    name: "Al Qāhirah"
  },
  {
    country: "SA",
    arabicName: "مكة",
    name: "Makkah al Mukarramah"
  },
  {
    country: "SA",
    arabicName: "جازان",
    name: "Jāzān"
  },
  {
    country: "US",
    arabicName: "امريكا",
    name: "TEXAS"
  }
]

//Make option in select
for (let city of cities) {
  const content =
    `<option>${city.arabicName}</option>`
  document.getElementById("cities-select").innerHTML += content
}




//Change time when select changed
let selectedElement = document.getElementById("cities-select")
selectedElement.addEventListener("change", function () {
  document.getElementById("city-name").innerHTML = this.value
  let cityName = ""
  let countryName = ""
  for (let city of cities) {
    if (city.arabicName === this.value) {
      cityName = city.name
      countryName = city.country
    }
  }
  getPrayersTimingOfCity(countryName, cityName)
  console.log(this.value)
  console.log(cityName)
  console.log(countryName)
})


// Function for Request with axios 
function getPrayersTimingOfCity(country, city) {

  let params = {
    country: country,
    city: city //"Al Qāhirah"
  }

  axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: params
  })
    .then(function (response) {
      const timings = response.data.data.timings
      const readable = response.data.data.date.readable
      const weekday = response.data.data.date.hijri.weekday.ar

      changeTimings("fajr-time", timings.Fajr)
      changeTimings("sunrise-time", timings.Sunrise)
      changeTimings("dhuhr-time", timings.Dhuhr)
      changeTimings("asr-time", timings.Asr)
      changeTimings("maghrib-time", timings.Maghrib)
      changeTimings("isha-time", timings.Isha)

      document.getElementById("today-date").innerHTML = `${weekday} ${readable}`
    })
    .catch(function (error) {
      console.log(error);
    })
}

// Function for change pray time
function changeTimings(id, timeName) {
  document.getElementById(id).innerHTML = timeName
}

getPrayersTimingOfCity("EG", "Al Qāhirah")
