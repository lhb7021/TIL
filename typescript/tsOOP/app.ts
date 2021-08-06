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

class Employee {
  constructor(
    private _fullName: string, 
    private _age: number, 
    private _hourlyRate: number, 
    public workingHoursPerWeek: number,
    public jobTitle = '주니어 개발자'){
  }

  get fullName () {
    return this._fullName;
  }

  set fullName (value: string) {
    this._fullName = value;
  }

  printEmployeeDatails = (): void => {
    console.log(`${this._fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${this._hourlyRate * this.workingHoursPerWeek} 달러 이다.`);
  }
}

let employee1 = new Employee('Hanbin Lee', 21, 40, 35);
console.log(employee1.fullName);
employee1.fullName = 'Coding Kim';
console.log(employee1.fullName);

employee1.printEmployeeDatails();
