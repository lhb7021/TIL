// let fullName: string;
// let age: number;
// let jobTitle: string;
// let hourlyRate: number;
// let workingHoursPerWeek: number;
// let printEmployeeDatails = (fullName: string, jobTitle: string, hourlyRate: number, workingHoursPerWeek: number)
// : void => {
//   console.log(`${fullName}의 직업은 ${jobTitle} 이고 일주일의 수입은 ${hourlyRate * workingHoursPerWeek} 달러 이다.`);
// };
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmployeeDatails = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + " \uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \uC774\uB2E4.");
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.fullName = 'Hanbin Lee';
employee1.age = 21;
employee1.jobTitle = '주니어 개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDatails();
