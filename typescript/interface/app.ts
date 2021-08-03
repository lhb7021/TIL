interface Student {
  readonly studentID: number;
  studentName: string;
  age?: number;
  gender: string;
  subject: string;
  courseCompleted: boolean;
  // addComment (comment: string): string;
  addComment?: (comment: string) => string;
}

function getStudentDetails (studentID: number): Student {
  return {
    studentID: 12345,
    studentName: 'Hanbin Lee',
    // age: 21,
    gender: 'male',
    subject: 'Javascript',
    courseCompleted: true
  };
}

let student1 = getStudentDetails(12345);
function saveStudentDetails (student: Student): void{

}

saveStudentDetails(student1)