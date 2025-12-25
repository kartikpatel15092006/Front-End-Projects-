// 🔑 OpenWeather API key (weather data lane ke liye)
let apikey = "ac72db2014df8a6f0183278dbfedfbf1";

// 🔘 Button ko HTML se select kar rahe hain
let btn = document.querySelector("button");

// 🖱️ Button pe click event lagaya
btn.addEventListener("click", async () => {

  // 👉 Button dabate hi getweather() function call hoga
  // await isliye kyunki getweather() async hai
  let data = await getweather();

  // 👉 API se aane wale data se city name aur temperature print
  // data.data → axios ka response object hota hai
  console.log(
    data.data.name,
    data.data.main.temp + "°C"
  );

});

// 🌦️ Weather data lane wala async function
async function getweather() {

  try {
    // 📝 Input field ko select kar rahe hain
    let input = document.querySelector("#int");

    // 🏙️ User ne jo city name likha hai use le rahe hain
    let mains = input.value;

    // 🌐 Weather API ka complete URL bana rahe hain
    let weatherlink =
      `https://api.openweathermap.org/data/2.5/weather?q=${mains}&appid=${apikey}&units=metric`;

    // 📡 Axios se API call (await isliye taaki data aane ka wait kare)
    let link = await axios.get(weatherlink);

    // ✅ Agar sab sahi raha toh pura response return
    return link;

  } catch (error) {

    // ❌ Agar koi dikkat aaye (galat city, net off, API error)
    console.log("Something went wrong ❌");

    // 🔍 Actual error console me dekhne ke liye
    console.log(error);
  }
}
