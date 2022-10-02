function findLowestScoringStudent(students) {
  let student = students[0]; 
  if(students.length===0){
    return null
  }
  for (let i = 1; i < students.length; i++) {
    if (students[i].score < student.score) {
      student = students[i];
    }
    }
  return student;

}


module.exports = findLowestScoringStudent;
