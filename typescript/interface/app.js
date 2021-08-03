function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: 'Hanbin Lee',
        // age: 21,
        gender: 'male',
        subject: 'Javascript',
        courseCompleted: true
    };
}
var student1 = getStudentDetails(12345);
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
