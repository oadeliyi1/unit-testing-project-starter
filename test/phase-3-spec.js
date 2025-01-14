const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {
  let entry;

  beforeEach("set up a Word instance", () => {
    entry = new Word("absolutely");
    entry2 = new Word("crazy");
  })

  describe('Word constructor function', function () {
    it('should have a "word" property', function() {
      //Arrange & Act


      //Assert
      expect(entry).to.have.property('word');
    })
     it('should set the "word" property when a new word is created', function() {
      //Arrange & Act


      //Assert
       expect(entry.word).to.eql('absolutely');
    })
  })
  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {
      //Arrange
      let expected = 'bsltly';
      let result = entry.removeVowels();
      //Act

      //Assert
      expect(result).to.eql(expected);
    })
  })
  describe('removeConsonants function', function () {
})
  it('should return the word with the consonants removed', function() {
    //Arrange
    let expected = 'aoue';
    let result = entry.removeConsonants();
    //Act

    //Assert
    expect(result).to.eql(expected);
  })
  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
    //Arrange
    let expected = "absolutelyyay";
    let expected2 = "azycray";
    //Act

    let result = entry.pigLatin();
    let result2 = entry2.pigLatin();

    //Assert
     expect(result).to.eql(expected);
     expect(result2).to.eql(expected2);

  })
})
