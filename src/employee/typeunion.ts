type StudentDD = {
    type: "stu";
    name: string
}

type CsStudentDD = {
    type: "cs"
    id: string
}

type Engineer = StudentDD & CsStudentDD
// let engineer:Engineer ={
//     name:"add",
//     id:"dd"
// }

type combine = string | number;

//overloaded
// function add(a: number, b: number) :number
// function add(a: string, b: number) :string
// function add(a: combine, b: combine) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }



//type casting in code
type EngineerInter = StudentDD | CsStudentDD
function addaa(eng: EngineerInter) {
    switch (eng.type) {
        case 'cs':
            break;
        case 'stu':
            break
    }
    // if('name' in eng){
    //     console.log(eng.name)
    // }
    // if(eng instanceof StudentDD){
    //     console.log(eng.name)
    // }
    // console.log(eng.name)
}


//  console.log(engineer.id+"="+engineer.name);


//type casting ways html
const textdd =document.getElementById('texvalu')! as HTMLInputElement
textdd.value='heello';



//error container in props
interface ErrorContainer{
    [prop:string]:string
}

const errorBag:ErrorContainer={
    name:"value is null",
    user:"must start"
}


//optional chaining
const chainingdd={
    name:"name",
    id:"id",
    address:{
        firstLine1:"line1",
        firstLine2:"line2",
    }
}

//one ways
console.log(chainingdd.address && chainingdd.address.firstLine1);
//another ways
console.log(chainingdd?.address?.firstLine1);

//nullish coalescing

const ddd=null
//1 st app
const dddd= ddd||'defau';
//
const dddddd=undefined
const dd= ddd??'defau';