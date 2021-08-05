// let fullName: string;
// let age: number;
// let jobTitle: string;
// let hourlyRate: number;
// let workingHoursPerWeek: number;

// let printEmployeeDatails = (fullName: string, jobTitle: string, hourlyRate: number, workingHoursPerWeek: number)
// : void => {
//   console.log(`${fullName}의 직업은 ${jobTitle} 이고 일주일의 수입은 ${hourlyRate * workingHoursPerWeek} 달러 이다.`);
// };

class Employee {
  fullName: string;
  age: number;
  jobTitle: string;
  hourlyRate: number;
  workingHoursPerWeek: number;

  printEmployeeDatails = (): void => {
    console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek} 달러 이다.`);
  }
}

let employee1 = new Employee();
employee1.fullName = 'Hanbin Lee';
employee1.age = 21;
employee1.jobTitle = '주니어 개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDatails();