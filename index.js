// Constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = () => this.dob.getFullYear();
// Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`;

// // Initiate object
// const person1 = new Person("john", "Doe", "1998");
// const person2 = new Person("mary", "Doe", "0000");

// console.log(person1.getFullName());

// function addNums(num1 = 1, num2 = 2) {
//   console.log(num1 + num2);
// }
//

// const addNums = (num1 = 3, num2 = 4) => num1 + num2;

// console.log(addNums);
// console.log(addNums());

// const x = "xyz";
// TERNARY OPERATIOR
// const color = x > 10 ? "red" : "blue";
// const color = "green";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("the color is blue");
//     break;
//   default:
//     console.log("color is not red  nor blue");
//     break;
// }

// console.log(color);

// if (x == 10) {
//   console.log("x is 10");
// }

// const aplhabets = ["q", "w", "e"];

// aplhabets.unshift("1");

// console.log(aplhabets);
// console.log(aplhabets.indexOf(1)); // -1 instead of 1

// const person = {
//   firstName: "john",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "street",
//     city: "Boston",
//     state: "MA",
//   },
// };

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;

// console.log(city);

const todos = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "meeting",
    isCompleted: false,
  },
  {
    id: 3,
    text: "eating",
    isCompleted: true,
  },
];

// for (todo of todos) {
//   console.log(todo);
// }

// for (i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// i = 0;
// while (i < todos.length) {
//   console.log(todos[i].text);
//   i++;
// }

// const todosJSON = JSON.stringify(todos);
// console.log(todos);

//////////***********High order array methods*************\\\\\\\\\\\\\

// For Each , MAP, Filter
// todos.forEach(function (todo) {
//   console.log(todo.id);
// });
// todos.foreach(todos.text) => console.log(todo);

// const todo = todos.forEach(text, string) => console.log(todo)

// MAP
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });
// console.log(todoText);

// Filter
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });
// console.log(todoCompleted);

// for of loop
// for (let todo of todos) {
//   console.log(todo.text);
// }

// for (i = 0; i <= todos.length; i++) {
//   console.log(todos[i].text);
// }

// let i = 0;
// while (i <= todos.length) {
//   console.log(`whileloop: ${todos[i].isCompleted}`);
//   i++;
// }
