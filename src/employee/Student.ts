
interface Student {
    name: string
    id: string
    optionals?:string
    greeting(phrase: string): void
}


class ChemStudent implements Student {
    name: string;
    id: string;
    code: string;

    constructor(name: string, id: string, code: string) {
        this.name = name;
        this.id = id;
        this.code = code;
    }

    greeting(phrase: string) {
        console.log(phrase + "=name=" + this.name + "=id=" + this.id + "=code=" + this.code);
    }
}

let stuValue: Student;
stuValue = {
    name: "name akshay",
    id: "id value",
    greeting(value: string) {
        console.log(value + this.name + " with id=" + this.id);
    }
}

let {name:firstname,id}=stuValue;
// let values:string[]=[];
// values.push("name");
// values.push("id");
// values.push("roles");
// let [nameva,id,role]=values;

stuValue=new ChemStudent(firstname,id,'role')
stuValue.greeting("hello how are u ==");


//////arrays
const names:Array<string>=[]

//genric
function asssign<T extends object,V extends object>(obj1:T,obj2:V){
    console.log(obj1);
    console.log(obj2);
}

let ass=asssign({name:'addd'},{id:'id'})
console.log(ass);