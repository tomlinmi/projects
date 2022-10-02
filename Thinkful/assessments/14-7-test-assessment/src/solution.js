/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/
//returns an array with two array inside of it.  
//maintain 2 arrays
function partitionStudentsByScore(students, score) {
const result = []
const studentsBelowScore = []
const studentsAboveScore = []

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];



students.forEach((student)=>{
  if(student[0].score <= score){
    
    studentsBelowScore.push(student)}
  else{
    studentsAboveScore.push(student)
  }
 result.push(studentsBelowScore) 
 result.push(studentsAboveScore) 
})
 //final array with the 2 arrays inside it
 /*[
  [{ name: "Morgan Sutton", score: 7.4 }],
  [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Natalee Vargas", score: 9.2 },
  ],
];
*/
                 
  return result;
  
}
console.log(partitionStudentsByScore(students, 8))
module.exports = partitionStudentsByScore;
