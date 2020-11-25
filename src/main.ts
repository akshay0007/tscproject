let result;
let arr=["bac","cde"];
let hoby=['rr',...arr]
hoby.push(...arr)
// console.log(hoby);
let person1={
    name:"aks"
}

let newvakye={...person1}
newvakye.name="ddddd";
console.log(newvakye);
console.log(person1);

const [h1,h2,...remaining] =hoby
console.log(h1)
console.log(h1)
console.log(remaining)