function Logging(value: string) {
    console.log("Logging exmaple")
    return function (constdd: Function) {
        console.log(value);
        console.log(constdd);
    }
}

function TempleteExample(templete: string, id: string) {
    console.log("TempleteExample exmaple")
    return function (dd: Function) {
        let iddata = document.getElementById(id)
        if (iddata) {
            iddata.innerHTML = templete;
        }
    }
}

function Log2(target:any,name:string,des:PropertyDescriptor){
    console.log("accessor")
    console.log(target);
    console.log(name)
    console.log(des)
}

@Logging('value logging')
@TempleteExample('<h1>data hi ddd ddd</h1>', 'app')
class DataStorage<T>{
    constructor(private items: T[]) { }

    addItems(item: T) {
        this.items.push(item);
    }

    removeItem(item: T) {
        this.items.slice(this.items.indexOf(item), 1)
    }

    getItems() {
        return [...this.items];
    }
}



let items: string[] = [];
items.push("add1");
items.push("add2");
let datastorage = new DataStorage(items);
console.log(datastorage.getItems());
