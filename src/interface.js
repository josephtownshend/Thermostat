$(document).ready(function() {
  console.log('ready!');
  var thermostat = new Thermostat();
  $( "h1" ).text(thermostat.getCurrentTemperature());

  $.get("http://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&APPID=62804b7d2f4774c56b134ebc2c182dee", function(londonWeather) {
    $( "#londonTemp" ).text(Math.floor(londonWeather.main.temp - 273.15))
    $( "#londonHumidity" ).text(londonWeather.main.humidity)
  })



$("#up").click(function() {
  thermostat.tempUp();
  var temp = thermostat.getCurrentTemperature();
  console.log(temp);
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#down").click(function() {
  thermostat.tempDown();
  var temp = thermostat.getCurrentTemperature();
  console.log(temp);
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#psm_on").click(function() {
  thermostat.switchPowerSavingModeOn();
  console.log(thermostat.isPowerSavingModeOn());
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#psm_off").click(function() {
  thermostat.switchPowerSavingModeOff();
  console.log(thermostat.isPowerSavingModeOn());
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#reset").click(function() {
  thermostat.resetTemp();
  console.log(thermostat.getCurrentTemperature());
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#energy").click(function() {
  var energy = thermostat.getCurrentEnergy();
  console.log(thermostat.getCurrentEnergy());
  $( "h1" ).text(thermostat.getCurrentTemperature());
})





});
