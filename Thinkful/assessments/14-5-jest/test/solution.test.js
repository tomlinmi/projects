/ Write your tests here!
const findLowestScoringStudent = require("../src/solution.js");

describe("findLowestScoringStudent", () => {
    it("should return the student with the lowest score", () => {
      // Steps for testing the function
const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

  const expected =  { name: "Morgan Sutton", score: 7.4 };
  const actual = findLowestScoringStudent(students);
  expect(actual).toEqual(expected);

    });
  it("should return null when an empty student list is given", () => {
      // Steps for testing the function

  const students = [];
    
  const expected = null;
  const actual = findLowestScoringStudent(students);
  expect(actual).toEqual(expected);

    });
  
  it("should return any student if multiple studens with the same lowest score", () => {
      // Steps for testing the function

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
  { name: "Karen Clarke", score:7.4},
];
    
  const expected = 7.4;
  const actual = findLowestScoringStudent(students);
  expect(actual.score).toEqual(expected);

    });
  
  
  });