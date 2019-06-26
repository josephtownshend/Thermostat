'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.tempUp = function() {
this.temperature += 1;
};

Thermostat.prototype.tempDown = function() {
  if(this.isMinTemp()){
    return;
  }
this.temperature -= 1;
};

Thermostat.prototype.isMinTemp = function() {
  this.temperature === this.MINIMUM_TEMPERATURE;
};
