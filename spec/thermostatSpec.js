'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Default', function() {

    it('Thermostat starts at 20', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it('Minimum temp is 10', function() {
      expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
    });
    it('Has power saving mode on', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });
  });

  describe('tempUp', function(){

    it('Thermostat can increase temp by 1', function() {
      thermostat.tempUp()
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('Thermostat can increase temp by 2', function() {
      thermostat.tempUp()
      thermostat.tempUp()
      expect(thermostat.getCurrentTemperature()).toEqual(22);
    });
  });

  describe('tempDown', function(){

    it('Thermostat can decrease temp by 1', function() {
      thermostat.tempDown()
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it('Thermostat can decrease temp by 2', function() {
      thermostat.tempDown()
      thermostat.tempDown()
      expect(thermostat.getCurrentTemperature()).toEqual(18);
    });
  });

  describe('tempUp + tempDown', function(){

    it('Thermostat can decrease and increase temp', function() {
      thermostat.tempUp()
      thermostat.tempDown()
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('Minimum temperature', function() {

    it('Has a min temp of 10', function() {
      for (var i = 0; i < 11; i++) {
      thermostat.tempDown();
    }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('Power Save Mode', function() {

    it('Can switch PSM off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
    it('Can switch PSM back on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('When PSM in on', function() {

    it('Has a max temp of 25', function() {
      for (var i = 0; i < 6; i++) {
      thermostat.tempUp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('When PSM is off', function() {

    it('Has a maximum temperature of 32', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 33; i++) {
      thermostat.tempUp();
    }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('resetTemp', function() {

    it('Can reset the temp to 20', function() {
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('Current Energy Usage', function() {

    it('Can return Low energy usage when temp < 18', function() {
      thermostat.temperature = 17;
      thermostat.getCurrentEnergy();
      expect(thermostat.getCurrentEnergy()).toEqual("Low");
    });
    it('Can return Medium energy usage when temp > 18 & < 25', function() {
      thermostat.temperature = 20;
      thermostat.getCurrentEnergy();
      expect(thermostat.getCurrentEnergy()).toEqual("Medium");
    });
    it('Can return High energy usage when temp > 25', function() {
      thermostat.temperature = 27;
      thermostat.getCurrentEnergy();
      expect(thermostat.getCurrentEnergy()).toEqual("High");
    });
  });

});
