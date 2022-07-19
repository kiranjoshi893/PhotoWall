import "./styles.css";
var name = "kiran";
console.log(name);
name = "Joshi";
console.log(name);

let age = 20;
console.log(age);
age = 30;
console.log(age);

// map
const integres = [1, 2, 3, 4, 5];
const integresResult = integres.map((value, index) => (value += 1));
console.log(integresResult);

// filter
const filterList = [1, 3, 2, 1, 5, 3, 4, 4];
const filterResult = filterList.filter((value, index) => {
  return filterList.indexOf(value) !== index;
});
const filterResult1 = filterList.filter((value, index) => value < 2);
console.log(filterResult);
console.log(filterResult1);

// prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let personResult = new Person("Kiran", 26);
Person.prototype.speak = function () {
  console.log(this);
};

console.log(personResult);
console.log(personResult.speak());

// ES6 call
class PersonNew {
  constructor(name, age, chidren) {
    this.name = name;
    this.age = age;
    this.chidren = chidren;
  }
  speak() {
    console.log(`Hi!, my name is ${this.name}`);
  }
  birth(child) {
    this.chidren.push(child);
  }
}
let PersonNewRes = new PersonNew("Joshi", 66, ["ddd", "ewewe"]);
console.log(PersonNewRes);
PersonNewRes.speak();
PersonNewRes.birth("sdsd");
console.log(PersonNewRes.chidren);

export default function App() {
  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
}
