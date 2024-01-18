//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let personname="lily young";

//lowercase
let lowercase=personname.toLowerCase()
console.log(lowercase);

//uppercase

let uppercase=personname.toUpperCase()
console.log(uppercase);

//titlecase

let names=personname.split("");
let titlecase="";
for (let i = 0; i < names.length; i++){
    titlecase+=names[i].charAt(0).toUpperCase() 
};
console.log(titlecase)
