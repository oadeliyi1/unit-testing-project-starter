const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz} = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
    let five = 5;
    let not5 = 4;
    //Act
    let result1 = isFive(five);
    let result2 = isFive(not5);
    //Assert
    expect(result1).to.equal(true);
    expect(result2).to.equal(false);

  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let oddNum = 1;


    //Act
    let result = isOdd(oddNum);

    //Assert
    expect(result).to.equal(true);

  });
  it("should return false if the num is even", () => {
    //Arrange
    let evenNum = 2;

    //Act
    let result = isOdd(evenNum);

    //Assert
    expect(result).to.equal(false);

  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let notANum = " ";
    //Assert
    expect(() => isOdd(notANum)).to.throw(Error);

  });
});
describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange
      let min = 0;
      let max = 3;


      //Act
      let test = myRange(min, max);
      let result = [0, 1, 2, 3];

      // Assert
      expect(test).to.eql(result);

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange
      let min = 0;
      let max = 4;

      //Act
      let test = myRange(min, max, 2);
      let result = [0, 2, 4];

      // Assert
      expect(test).to.eql(result);

    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange

    //Act

    //Assert
    expect(()=> myRange('hey','hi','hello')).to.throw(Error)

  });
});
describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should throw a TypeError if max is not a number', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
})
