/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let favoriteFruits: string[] = ["banana", "apple", "orange"];

if (favoriteFruits.includes("banana")) {
    console.log(" really like bananas!");
}

if (favoriteFruits.includes("apple")) {
    console.log("I really like apples!");
}

if (favoriteFruits.includes("orange")) {
    console.log("I really like oranges!");
}

if (favoriteFruits.includes("strawberry")) {
    console.log("I really like strawberries!");
} else {
    console.log("I don't like strawberries.");
}

if (favoriteFruits.includes("grape")) {
    console.log("I really like grapes!");
} else {
    console.log("I don't like grapes.");
}