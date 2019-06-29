$(document).ready(function() {
  console.log('ready!');
  var thermostat = new Thermostat();

  $.get("http://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&APPID=62804b7d2f4774c56b134ebc2c182dee", function(londonWeather) {
    $( "#londonWeather" ).text(londonWeather.weather[0].main)
    $( "#londonWeatherDescription" ).text(londonWeather.weather[0].description)


  })


});
