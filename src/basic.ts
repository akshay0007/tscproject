function add(n1: number, n2: number, value: boolean) {
    return n1 + n2
}
let value: boolean;

value = false;
enum Roles{
    ADMIN, USERS
}
const person = {
    name: "abc",
    age: 3,
    hobbies: ['a', 'b'],
    role: Roles.ADMIN
}

console.log("hello dd" + person);

console.log("hello dd" + add(3, 4, value));

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
}
