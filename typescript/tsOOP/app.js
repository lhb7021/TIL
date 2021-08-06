// let fullName: string;
// let age: number;
// let jobTitle: string;
// let hourlyRate: number;
// let workingHoursPerWeek: number;
// let printEmployeeDatails = (fullName: string, jobTitle: string, hourlyRate: number, workingHoursPerWeek: number)
// : void => {
//   console.log(`${fullName}의 직업은 ${jobTitle} 이고 일주일의 수입은 ${hourlyRate * workingHoursPerWeek} 달러 이다.`);
// };
// class Employee {
//   fullName: string;
//   age: number;
//   jobTitle = '주니어 개발자';
//   hourlyRate: number;
//   workingHoursPerWeek: number;
//   printEmployeeDatails = (): void => {
//     console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek} 달러 이다.`);
//   }
// }
// let employee1 = new Employee();
// employee1.fullName = 'Hanbin Lee';
// employee1.age = 21;
// employee1.hourlyRate = 40;
// employee1.workingHoursPerWeek = 35;
// employee1.printEmployeeDatails();
// let employee2 = new Employee();
// employee2.fullName = 'Coding Kim';
// employee2.age = 23;
// employee2.hourlyRate = 40;
// employee2.workingHoursPerWeek = 40;
// employee2.printEmployeeDatails();
var Employee = /** @class */ (function () {
    function Employee(_fullName, _age, _hourlyRate, workingHoursPerWeek, jobTitle) {
        var _this = this;
        if (jobTitle === void 0) { jobTitle = '주니어 개발자'; }
        this._fullName = _fullName;
        this._age = _age;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.jobTitle = jobTitle;
        this.printEmployeeDatails = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + " \uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this._hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \uC774\uB2E4.");
        };
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('Hanbin Lee', 21, 40, 35);
console.log(employee1.fullName);
employee1.fullName = 'Coding Kim';
console.log(employee1.fullName);
employee1.printEmployeeDatails();
