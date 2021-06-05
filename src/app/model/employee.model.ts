export class Employee {
    employeeID: number;
    name: string;
    firstName: string;
    middleInitial: string;
    lastName: string;

    constructor(employeeID, name,  firstName, middleInitial, lastName) {
        this.employeeID = employeeID;
        this.name = name;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
    }
}