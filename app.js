// API key
let apikey = "ac72db2014df8a6f0183278dbfedfbf1";

// search button
let btn = document.querySelector(".search-btn");

// click event
btn.addEventListener("click", async () => {
  let data = await getweather();

  // agar data mila tabhi UI update karo
  if (data) {
    console.log(data.data.name, data.data.main.temp + "°C");

    // temperature update
    document.querySelector("h1").innerText =
      data.data.main.temp + "°C";

    // city update
    document.querySelector("h2").innerText =
      data.data.name;

    // wind speed update
    document.querySelector("#wind").innerText =
      data.data.wind.speed + " km/h";

    // humidity update
    let hum = document.querySelector("#hum");
    hum.innerText = data.data.main.humidity + "%";
  }
});


// weather function
async function getweather() {
  try {
    // input field
    let input = document.querySelector("input");
    let city = input.value;

    // empty input check
    if (city === "") {
      alert("Please enter a city name");
      return;
    }

    // API URL
    let weatherlink =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    // API call
    let response = await axios.get(weatherlink);

    return response;

  } catch (error) {
    console.log("Something went wrong ❌");
    alert("City not found 😢");
    console.log(error);
  }
}
