// Write your tests here!
const expect = require("chai").expect;
const findStudentByName = require("../src/solution.js");

describe("findStudentByName", () => {
    it("should return the student object based on input name", () => {
      const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];
      
      expect(findStudentByName(students, "Leo Yeon-Joo")).to.eql( { name: "Leo Yeon-Joo", score: 8.9 });
      expect(findStudentByName(students, "Morgan Sutton")).to.eql( { name: "Morgan Sutton", score: 7.4 });
      expect(findStudentByName(students, "Natalee Vargas")).to.eql({ name: "Natalee Vargas", score: 9.2 });
  })
  
  it("Should return null if the name entered is not in the students", () => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
    expect(findStudentByName(students, null )).to.be.null;

      
          });
}); 