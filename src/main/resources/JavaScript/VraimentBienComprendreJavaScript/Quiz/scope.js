const kevin = {
    name: "Kevin",
    age: 18
};

const franck = kevin;

franck.name = "Franck";
franck.age = 27;

console.log(franck.name);
console.log(franck.age);
console.log(kevin.name);
console.log(kevin.age);