// Write your tests here!
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
  });