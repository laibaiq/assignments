"use strict";
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Define a function called make_shirt
function make_shirt(size, message) {
    // Print a sentence summarizing the size and message on the shirt
    console.log(`The shirt is size ${size.toUpperCase()} and has the message: "${message}"`);
}
// Call the function with size and message parameters
make_shirt('medium', 'Hello, World!');
