interface Student1 {
  gender: 'male' | 'female';
}

function getStudentDetails (studentID: number): Student1 {
  return {
    gender: 'female'
  };
}