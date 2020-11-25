
// abstract class Dept {
//     constructor(protected dname: string) { }

//     abstract set deptName(value: string);

//     abstract get deptName(): string;
// }

class Employee {

    private static instance: Employee;

    constructor(protected name: String, protected id: string) {
    }

    get detailsOfEmployee() {
        return this.name + "" + this.id;
    }

    static getInstance() {
        if (Employee.instance) {
            return this.instance;
        }
        return this.instance = new Employee("", "");
    }

}

class ItEmployee extends Employee {

    constructor(name: string, id: string, private role: string) {
        super(name, id);
    }

    get detailsOfEmployee() {
        return this.name + "" + this.id + this.role;
    }

}


let emp = Employee.getInstance();
