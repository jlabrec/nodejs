// //Const == constant variable/function
// //let == variable that CAN change value throughout execution. 

// let name = 'Jacob';
// console.log(name);
// const age = 26;
// let hasHobbies = true; 

// /**
//  * Arrow Functions
//  */
// const summarizeUser =  (name,age,hobbies) => {
//     return ('Name is ' + name + ', age is ' + age + ', the the user has hobbies: ' + hobbies);
// }

// const add = (a,b) => a+b;
// const addOne = a => ++a;
// //

// console.log(add(3,2));
// console.log(addOne(5));

// console.log(summarizeUser(name,age,hasHobbies));

// const person = {
//     name: "Jacob",
//     age: 26,
//     //Greet arrow will return undefined for name, because arrow funtioncs use of this keyword is for the class, not the instance. 
//     greetArrow: () => {
//         console.log("Hello, i am "+  this.name);
//     },
//     greet(){
//         console.log("hello i'm "+ this.name);
//     }
// };
// console.log(person);
// person.greet();

// const hobbies = ['Sports','Cooking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push("Programming");
// console.log(hobbies);

/**
 * REST AND SPREAD OPERATORS(...)
 */
// const copiedArray =[...hobbies]
// const copiedPerson = {...person};
// console.log(copiedPerson);
// console.log(copiedArray);

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1,arg2,arg3];
// };
// const restToArray = (...args) => {
//     return args;
// };
// console.log(restToArray(1,2,3,4,5,6,6));

// console.log(toArray(1,2,3));

/**
 * DESTRUCTURING
 */

 //Non destructuring
// const printName = (person) => {
//     console.log(person.name);
// };

// const desPrintName = ({name}) => {
//     console.log(name);
// }

// const {name, age} = person;
// console.log(name,age);

// printName(person);
// desPrintName(person);

// let [hobby1,hobby2] = hobbies;
// console.log(hobby1);
 

/**
 * ASYNC Code and Promises
 */

 const fetchData = () => {
     const promise = new Promise((resolve, reject)=>{
     setTimeout(()=>{resolve("Done!"); reject("Failed")},1500);
     });
     return promise; 
 };
setTimeout(() => {
    console.log('timer is done');
    fetchData().then(text=>{
        console.log(text);
        return fetchData();
    })
    .then(text2=>{
        console.log(text2);
    });
},2000);
console.log("Hello");
