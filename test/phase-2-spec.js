const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    //Arrange
    let array = [1, 2, 3];
    let expected = [1, 2, 3, 3, 2, 1];
    //Act
    let result = mirrorArray(array);

    //Assert
    expect(result).to.eql(expected);
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {

  it('should return a function that will increment the counter when invoked', function () {
    //Arrange
    let expected = 1;
    //Act
    let result = hiddenCounter();

    //Assert
    expect(result()).to.equal(expected);
  })
})

//3. myMap
describe('myMap', function () {
 it("should function like the built in Array#map", function () {
    //Arrange
   let originalArray = [1, 2, 3];
   let cb = (num) => {
     return num*2;
   }
   let expected = [2, 4, 6];

    //Act

   let result = myMap(originalArray, cb);

    //Assert
   expect(result).to.eql(expected);

  });

  it("should not call the built in Array#map", function () {
     //Arrange
    let myMapSpy = chai.spy.on(myMap, "originalArray.map");
    let originalArray = [1, 2, 3];
    let cb = (num) => {
      return num*2;
    }
    let expected = [2, 4, 6];
    //Act
    let result = myMap(originalArray, cb);
    //Assert
    expect(myMapSpy).to.have.not.been.called;
  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
     //Arrange
    
    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
})
