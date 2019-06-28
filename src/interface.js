$(document).ready(function() {
  console.log('ready!');
  var thermostat = new Thermostat();
  $( "h1" ).text(thermostat.getCurrentTemperature());

$("#up").click(function() {
  thermostat.tempUp();
  var temp = thermostat.getCurrentTemperature();
  alert("Temp Up")
  console.log(temp);
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#down").click(function() {
  thermostat.tempDown();
  var temp = thermostat.getCurrentTemperature();
  alert("Temp Down")
  console.log(temp);
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#psm_on").click(function() {
  thermostat.switchPowerSavingModeOn();
  alert("PSM On")
  console.log(thermostat.isPowerSavingModeOn());
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#psm_off").click(function() {
  thermostat.switchPowerSavingModeOff();
  alert("PSM Off")
  console.log(thermostat.isPowerSavingModeOn());
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#reset").click(function() {
  thermostat.resetTemp();
  alert("Reset Temp")
  console.log(thermostat.getCurrentTemperature());
  $( "h1" ).text(thermostat.getCurrentTemperature());
})

$("#energy").click(function() {
  var energy = thermostat.getCurrentEnergy();
  alert(`${energy}`)
  console.log(thermostat.getCurrentEnergy());
  $( "h1" ).text(thermostat.getCurrentTemperature());
})





});
