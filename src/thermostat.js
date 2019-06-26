'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
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

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}
// Thermostat.prototype.switchOffPsm = function() {
//   this.powerSavingMode = false;
// };
