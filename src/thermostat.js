'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25
  this.MAX_LIMIT_PSM_OFF = 32
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.tempUp = function() {
this.temperature += 1;
};

Thermostat.prototype.tempDown = function() {
  if(this.isMinTemp()) {
    return;
  }
this.temperature -= 1;
};

Thermostat.prototype.tempUp = function() {
  if(this.isMaxTemp()) {
    return
  }
  this.temperature += 1;
}

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
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

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentEnergy = function() {
  if (this.getCurrentTemperature() < 18) {
    return "Low";
  } else if (this.getCurrentTemperature() >= 18 && this.getCurrentTemperature() <= 25) {
    return "Medium";
  } else {
    return "High"
  }
}
