var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have working buttons to update the display of the running total', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#number2')).click();
  element(by.css('#number1')).click();
  element(by.css('#number4')).click();
  element(by.css('#number5')).click();
  element(by.css('#number6')).click();
  element(by.css('#number7')).click();
  element(by.css('#number8')).click();
  element(by.css('#number9')).click();
  element(by.css('#number0')).click();
  element(by.css('#number9')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('32145678909');
});


});
