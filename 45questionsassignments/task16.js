"use strict";
/*//
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
let GuestList = [
    "Sania jabeen",
    "Sehrish",
    "zebreen asad",
    "Aleeya khan",
    "Zoya malik",
    "Hania amir",
];
for (let guest of GuestList) {
    console.log(`Hello, ${guest} we found a bigger dinner table`);
}
let newguestatbeginning = "zehra bibi";
GuestList.unshift(newguestatbeginning);
console.log(GuestList);
let newguestinmidddle = "fareeha ali";
let middleindex = Math.floor(GuestList.length / 2);
GuestList.splice(middleindex, 0, newguestinmidddle);
console.log(GuestList);
let newguestatend = " fatima zerkesh";
GuestList.push(newguestatend);
console.log(GuestList);
console.log("new invitations for dinner:");
for (let guest of GuestList) {
    console.log(`Dear ${guest}, you are invited to dinner`);
}
