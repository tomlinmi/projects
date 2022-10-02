 // Write your tests here!
const { expect } = require("chai"); 
const partitionStudentsByScore= require("../src/solution.js"); 

describe("partitionStudentsByScore", () => {
  
  it("should correctly partition students into their appropriate arrays 2 arrays", () => { 
    const students = [ { name: "Leo Yeon-Joo", score: 8.9 }, 
                      { name: "Morgan Sutton", score: 7.4 }, 
                      { name: "Natalee Vargas", score: 9.2 }, ]; 
    
    const expected = [ [{ name: "Morgan Sutton", score: 7.4 }], 
                      [ { name: "Leo Yeon-Joo", score: 8.9 }, 
                       { name: "Natalee Vargas", score: 9.2 } ] ]; 
    
    expect(partitionStudentsByScore(students, 8)).to.eql(expected); }); 
  
  
  it("should partition all students into 1 array", () => { 
    const students = [ { name: "Leo Yeon-Joo", score: 8.9 }, 
                      { name: "Morgan Sutton", score: 7.4 }, 
                      { name: "Natalee Vargas", score: 9.2 }, ]; 
    expect(partitionStudentsByScore(students, 10)).to.eql([students, []]); }); 
  
  
  it("should return array of empty array [],[] if list is empty", () => { 
    const students = [ { name: "Leo Yeon-Joo", score: 8.9 },
                      { name: "Morgan Sutton", score: 7.4 }, 
                      { name: "Natalee Vargas", score: 9.2 }, ];
    expect(partitionStudentsByScore([], 0)).to.eql([[], []]); }); });