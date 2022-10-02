/*
  Write a function that returns a particular student object when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {

const foundStudent = students.find((student) => student.name === name);
if(foundStudent){
  return foundStudent
}else {
    return null}it
}

module.exports = findStudentByName;
