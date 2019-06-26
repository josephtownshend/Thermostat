'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

describe('default', function(){

  it('Thermostat starts at 20', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
describe('tempUp', function(){

  it('Thermostat can increase temp by 1', function() {
    thermostat.tempUp()
    expect(thermostat.temperature).toEqual(21);
  });

  it('Thermostat can increase temp by 2', function() {
    thermostat.tempUp()
    thermostat.tempUp()
    expect(thermostat.temperature).toEqual(22);
  });
});

describe('tempDown', function(){

  it('Thermostat can decrease temp by 1', function(){
    thermostat.tempDown()
    expect(thermostat.temperature).toEqual(19);
  });
  it('Thermostat can decrease temp by 2', function(){
    thermostat.tempDown()
    thermostat.tempDown()
    expect(thermostat.temperature).toEqual(18);
  });
});

describe('tempUp + tempDown', function(){

  it('Thermostat can decrease and increase temp', function(){
    thermostat.tempUp()
    thermostat.tempDown()
    expect(thermostat.temperature).toEqual(20);
  });
});

});
